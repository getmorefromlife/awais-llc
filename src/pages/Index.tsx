import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesBento from "@/components/ServicesBento";
import ROIWidget from "@/components/ROIWidget";
import Leadership from "@/components/Leadership";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <Hero />
      <ServicesBento />
      <ROIWidget />
      <Leadership />
    </main>
    <Footer />
  </div>
);

export default Index;
