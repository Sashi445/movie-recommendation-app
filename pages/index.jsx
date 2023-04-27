import MainContent from "@/layouts/MainContent";
import Wrapper from "@/layouts/Wrapper";
import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";
// import { Inter } from "next/font/google";

export default function Home() {

  const user = useSelector(state => state.auth.user);

  return (
    <>
      <Head>
        <title>Movie Recommendation App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Wrapper>
          <MainContent>
            <div className="p-4">
              {user && <div className="font-bold text-xl">Hello, {user.username} 👋</div>}
            </div>
          </MainContent>
        </Wrapper>
      </main>
    </>
  );
}