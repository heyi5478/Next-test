import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>PagesRouter</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/Route">PagesRouter</Link>
    </nav>
  );
}

export default Navbar;