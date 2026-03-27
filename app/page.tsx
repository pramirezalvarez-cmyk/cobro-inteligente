import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { DemoTable } from "@/components/demo-table"
import { EmailSignup } from "@/components/email-signup"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <DemoTable />
        <EmailSignup />
      </main>
      <Footer />
    </div>
  )
}
