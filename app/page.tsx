import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Office from "@/components/sections/Office";
import Faqs from "@/components/sections/Faqs";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Office />
      <Faqs />
      <Contact />
    </main>
  );
}