"use client";

import Loading from "@/components/Loading";
import PortfolioHero from "@/components/PortfolioHero";
import useResourceLoading from "@/hooks/useResourceLoading";
import { useEffect, useState } from "react";

export default function Home() {
  const { progress, loadingComplete } = useResourceLoading();
  const [mounted, setMounted] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (loadingComplete) {
      // Add a small delay before showing content
      const timeout = setTimeout(() => {
        setShowContent(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [loadingComplete]);

  if (!mounted) {
    return <Loading progress={0} />;
  }

  return (
    <>
      {!showContent && <Loading progress={progress} />}
      <main
        className={`w-full min-h-screen transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex justify-center items-center h-full min-h-screen">
          <div className="flex justify-center items-center max-h-full w-full p-4">
            <PortfolioHero />
          </div>
        </div>
      </main>
    </>
  );
}
