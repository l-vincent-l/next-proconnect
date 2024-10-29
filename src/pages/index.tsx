import Head from "next/head";
import LoginButton from "./api/components/login-btn";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mon compte pro exemple</title>
      </Head>
      <div>
        <LoginButton />
      </div>
    </>
  );
}
