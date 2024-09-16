import About from "@/components/About";
import LandingPage from "@/components/AutoScroll/LandingPage";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <LandingPage />
      <About />
      <Features />
    </div>
  );
}
