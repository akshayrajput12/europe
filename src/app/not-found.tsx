import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-center text-gray-600 mb-6 max-w-md">
        Oops! The server was able to communicate with the browser, but it couldn&apos;t find the requested page.
        <br />
        This can happen when a page is moved, deleted, or the URL is mistyped.
      </p>
      <Link
        href="/"
        className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Return to homepage"
      >
        Back to Home
      </Link>
    </div>
  );
}