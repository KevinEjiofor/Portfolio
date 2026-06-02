import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Target, Users, Lightbulb } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Zap,
      title: "Performance First",
      description: "Building lightning-fast applications that users love",
    },
    {
      icon: Target,
      title: "Pixel Perfect",
      description: "Attention to detail in every design element",
    },
    {
      icon: Users,
      title: "User Focused",
      description: "Creating experiences that solve real problems",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and approaches",
    },
  ]

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-purple-400/50 text-purple-400 bg-purple-400/10 mb-4">
            About Me
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Crafting Digital
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Experiences
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a love for creating beautiful, functional, and user-friendly
            applications. My journey in tech spans over 5 years, during which I've worked with startups and enterprises
            alike.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-200">My Story</h3>
              <div className="space-y-4 text-gray-400">
                <p>
                  Started my journey at UC Berkeley studying Computer Science, where I fell in love with the endless
                  possibilities of code. What began as curiosity quickly became a passion for solving complex problems
                  through elegant solutions.
                </p>
                <p>
                  Today, I specialize in modern web technologies, with expertise in React, Node.js, and cloud platforms.
                  I believe in writing clean, maintainable code and creating applications that not only work well but
                  feel great to use.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to open source projects, mentoring aspiring
                  developers, or exploring the latest in AI and machine learning.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-gray-700">
                <div className="text-2xl font-bold text-cyan-400">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-gray-700">
                <div className="text-2xl font-bold text-purple-400">30+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-gray-700">
                <div className="text-2xl font-bold text-pink-400">10+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-gray-700 hover:bg-slate-800/70 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <value.icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-gray-200 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-400">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
