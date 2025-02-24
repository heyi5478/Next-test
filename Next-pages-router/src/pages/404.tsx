import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter();
  
  useEffect(() => {
    window.setTimeout(() => {
      // router.go(-1);
      // router.go(1);
      router.push('/');
    }, 5000)
  }, [])

  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found :(</h2>
      <p>Go back to the <Link href="/">Homepage</Link></p>
    </div>
  )
}

export default NotFound;