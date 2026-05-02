import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import GreenDots from "@/components/GreenDots";

const highlights = [
  {
    icon: Code2,
    title: "Clean & Scalable Code",
    description:
      "I write code that is easy to maintain, readable, and built to scale.",
  },
  {
    icon: Rocket,
    title: "Performance Focus",
    description:
      "I optimize applications for speed, responsiveness, and smooth user experience.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "I enjoy breaking down complex problems and building practical solutions.",
  },
  {
    icon: Users,
    title: "Real-World Experience",
    description:
      "Worked on production-level applications in a collaborative agile environment.",
  },
];

export const About = () => {
  return (
    
    <section id="about"  className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <GreenDots count={20} />
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                 one function at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
  <p>
    I'm a Software Engineer who enjoys turning ideas into real, usable products.
    My journey started with curiosity about how applications work, and today I build
    modern web experiences using React.js, Java, and AI.
  </p>

<p>
  At Broadridge, I worked on applications like OpsGPT, GPTM Portal, and SIS,
  contributing across both testing and development. This experience helped me
  understand how to build and deliver reliable, scalable applications end-to-end.
</p>

<p>
  I’m particularly interested in AI and enjoy building projects that combine
  intelligence with user experience. I’m always exploring new technologies,
  continuously learning, and pushing myself to stay updated in this fast-moving space.
</p>
</div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
  <p className="text-lg font-medium italic text-foreground">
    "I like building things that don’t just work — they make sense, scale well, and actually help people."
  </p>
</div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};