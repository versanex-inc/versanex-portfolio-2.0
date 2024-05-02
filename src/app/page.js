import About from "@/Components/Home/About/About";
import Hero from "@/Components/Home/Hero/Hero";
import './Page.css'
import Services from "@/Components/Home/Services/Services";
import Footer from "@/Components/Home/Footer/Footer";

export default function Home() {
  return (
    <main className="main">
      <Hero/>
      <About/>
      <Services/>
      <Footer/>
    </main>
  );
}
