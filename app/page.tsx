import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ServiceCards } from "@/components/service-cards"
import { StatsSection } from "@/components/stats-section"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      {/* Top Bar with contact info - matching reference */}
      <TopBar />
      
      {/* Navigation - matching reference structure */}
      <Navbar />
      
      {/* Hero Section - dark background with company name */}
      <Hero />
      
      {/* Service Cards - 3 cards matching reference */}
      <ServiceCards />
      
      {/* Stats Section - numbers and icons */}
      <StatsSection />
      
      {/* Location Section - Tenerife y Gran Canaria */}
      <LocationSection />
      
      {/* Footer - multi-column matching reference */}
      <Footer />
    </main>
  )
}
