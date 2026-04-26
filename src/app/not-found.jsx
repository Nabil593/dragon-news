import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-4">
      <h2 className="text-6xl font-bold text-primary">404</h2>
      <h3 className="text-2xl mt-4 font-semibold">Oops! Page Not Found</h3>
      <p className="mt-2 text-base-content/70">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-6">
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  )
}