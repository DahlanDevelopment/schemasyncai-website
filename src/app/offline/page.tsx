import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SchemaSync.AI",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-silver-300">
          SchemaSync.AI
        </p>
        <h1 className="mt-6 text-2xl font-semibold text-silver-100">
          This site is currently not publicly available.
        </h1>
        <p className="mt-4 text-base text-silver-300">
          Please check back soon.
        </p>
      </div>
    </div>
  );
}
