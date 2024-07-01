// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to RP Hall MESS</h1>
      <Link href="/signup" legacyBehavior>
        <a>Sign Up Here</a>
      </Link>
    </div>
  );
}
