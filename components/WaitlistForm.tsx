"use client";

import { useActionState } from "react";
import { joinWaitlist, type WaitlistState } from "@/app/actions";
import { getTranslations, type Lang } from "@/lib/translations";

const initialState: WaitlistState = { status: "idle" };

export default function WaitlistForm({
  audience,
  lang,
}: {
  audience: "rider" | "advertiser";
  lang: Lang;
}) {
  const [state, formAction, pending] = useActionState(joinWaitlist, initialState);
  const t = getTranslations(lang).form;

  if (state.status === "success") {
    return (
      <p className="rounded-lg bg-brand/10 px-4 py-3 text-sm font-medium text-brand-dark">
        {state.code === "duplicate"
          ? t.duplicate
          : audience === "advertiser"
            ? t.okAdvertiser
            : t.okRider}
      </p>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <input type="hidden" name="audience" value={audience} />
      {audience === "advertiser" && (
        <input
          type="text"
          name="company"
          required
          placeholder={t.company}
          className="rounded-lg border border-foreground/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand"
        />
      )}
      <input
        type="email"
        name="email"
        required
        placeholder={t.email}
        className="rounded-lg border border-foreground/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand"
      />
      <input
        type="text"
        name="city"
        placeholder={t.city}
        className="rounded-lg border border-foreground/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand"
      />
      <button
        type="submit"
        disabled={pending}
        className="rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60"
      >
        {pending
          ? t.pending
          : audience === "advertiser"
            ? t.submitAdvertiser
            : t.submitRider}
      </button>
      {state.status === "error" && (
        <p className="text-sm text-red-600">
          {state.code === "invalid_email" ? t.invalidEmail : t.serverError}
        </p>
      )}
    </form>
  );
}
