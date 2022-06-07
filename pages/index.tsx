import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <h1>Welcome to nextjs</h1>
      <Link href="/login">Login Page</Link>
    </>
  );
};

export default Home;
