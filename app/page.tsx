import { ProfessionalHero } from "@/components/professional-hero"
import { AboutMe } from "@/components/about-me"
import { ExpertiseSection } from "@/components/expertise-section"
import { CertificationsSection } from "@/components/certifications-section"
import { WorkPortfolio } from "@/components/work-portfolio"
import { CareerPath } from "@/components/career-path"
import { GetInTouch } from "@/components/get-in-touch"
import { Header } from "@/components/header"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main>
        <ProfessionalHero />
        <AboutMe />
        <ExpertiseSection />
        <CertificationsSection />
        <WorkPortfolio />
        <CareerPath />
        <GetInTouch />
      </main>
    </div>
  )
}
