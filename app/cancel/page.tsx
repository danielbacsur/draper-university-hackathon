import Link from 'next/link';

export default function CancelPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Payment Cancelled</h1>
      <p>Your payment was cancelled. No charges were made.</p>
      <Link href="/marketplace" className="text-blue-500 hover:underline">
        Return to Home
      </Link>
    </div>
  );
}