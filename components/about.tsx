import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Users, Zap } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Breaking down complex challenges into elegant solutions",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in cross-functional teams",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate software engineer with 5+ years of experience building web applications that make a
            difference. I love turning ideas into reality through code and am always eager to learn new technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Started my journey in computer science at UC Berkeley, where I discovered my passion for creating
                digital solutions that solve real-world problems.
              </p>
              <p>
                Over the years, I've worked with startups and established companies, contributing to products used by
                millions of users. I specialize in full-stack development with a focus on React, Node.js, and cloud
                technologies.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, mentoring junior developers,
                or exploring the latest in AI and machine learning.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <highlight.icon className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
