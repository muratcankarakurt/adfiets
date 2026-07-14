"use client";

import { useActionState } from "react";
import { joinWaitlist, type WaitlistState } from "@/app/actions";

const initialState: WaitlistState = { status: "idle" };

export default function WaitlistForm({
  audience,
}: {
  audience: "rider" | "advertiser";
}) {
  const [state, formAction, pending] = useActionState(joinWaitlist, initialState);

  if (state.status === "success") {
    return (
      <p className="rounded-lg bg-brand/10 px-4 py-3 text-sm font-medium text-brand-dark">
        {state.message}
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
          placeholder="Company name"
          className="rounded-lg border border-foreground/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand"
        />
      )}
      <input
        type="email"
        name="email"
        required
        placeholder="Email address"
        className="rounded-lg border border-foreground/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand"
      />
      <input
        type="text"
        name="city"
        placeholder="City (optional)"
        className="rounded-lg border border-foreground/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand"
      />
      <button
        type="submit"
        disabled={pending}
        className="rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60"
      >
        {pending
          ? "Joining…"
          : audience === "advertiser"
            ? "Request advertising info"
            : "Join the waitlist"}
      </button>
      {state.status === "error" && (
        <p className="text-sm text-red-600">{state.message}</p>
      )}
    </form>
  );
}
