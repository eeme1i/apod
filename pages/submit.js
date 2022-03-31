import Head from "next/head";
import Apod from "../components/apod-card/Apod";
import Creds from "../components/apod-card/Cred";
import Header from "../components/header/Header";
import Info from "../components/apod-card/Info";
import Loading from "../components/Loading";
import Paragraph from "../components/apod-card/Paragraph";

export default function Home() {
  return (
    <div className="font-inter min-h-screen selection:bg-neutral-200 bg-neutral-50">
      <Head>
        <title>apod :)</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Loading /> */}

      <Header />

      <main className="max-w-[38rem] mx-auto mb-8 mx-8 sm:my-8 space-y-8 bg-neutral-100 px-8 py-8 rounded-3xl lg:flex lg:items-center lg:text-left lg:space-y-0 lg:space-x-8">
        <div className="">
          <div className="xl:max-w-xl lg:max-w-md space-y-4">
            <Info title="Submit an image" />
            <Paragraph text="To submit an image, please fill out the form below:" />
          </div>
        </div>
      </main>

      <footer className=""></footer>
    </div>
  );
}