import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CV",
  description: "My curriculum vitae",
};

export default function CV() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-medium">My CV</h1>
        <Link
          href="/cv.pdf"
          download="cv_sean_vergauwen.pdf"
          className="px-4 py-2 text-sm font-medium border border-neutral-300 dark:border-neutral-700 rounded-md transition-colors duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
        >
          Download PDF
        </Link>
      </div>
      <object
        data="/api/cv"
        type="application/pdf"
        className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800"
        style={{ height: "85vh" }}
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Your browser cannot display the PDF.{" "}
          <Link href="/cv.pdf" download className="underline">
            Download it instead.
          </Link>
        </p>
      </object>
    </section>
  );
}
