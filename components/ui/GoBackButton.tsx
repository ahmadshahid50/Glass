"use client";

import { ArrowLeft } from "lucide-react";

export function GoBackButton() {
  return (
    <button
      type="button"
      onClick={() => window.history.back()}
      className="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-6 py-3 font-medium text-primary transition-colors hover:bg-primary hover:text-white dark:text-white dark:hover:text-white"
    >
      <ArrowLeft className="h-5 w-5" /> Go Back
    </button>
  );
}
