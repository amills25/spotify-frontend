import Head from "next/head";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import NowPlaying from "@/components/NowPlaying";

export default function Home() {
  return (
    <>
      <main className="flex">
        {/* Sidebar */}
        <Sidebar />
        <div className="flex flex-col h-100 w-full">
          {/* Main content */}
          <MainContent />

          {/* Now playing */}
          <NowPlaying />
        </div>
      </main>
    </>
  );
}
