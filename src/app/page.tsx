import { OrderProvider } from "@/components/OrderContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuSection from "@/components/Menu";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import FeedbackButton from "@/components/FeedbackButton";

export default function Home() {
  return (
    <OrderProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Reviews />
        <Gallery />
        <Location />
      </main>
      <Footer />
      <CartSidebar />
      <FeedbackButton />
    </OrderProvider>
  );
}
