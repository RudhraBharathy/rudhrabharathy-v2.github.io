import PortfolioHero from "@/components/PortfolioHero";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-full min-h-screen lg:h-screen">
      <div className="flex justify-center items-center min-h-[350px] max-h-full w-full p-4">
        <PortfolioHero />
      </div>
    </div>
  );
}