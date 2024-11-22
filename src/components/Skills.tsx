import Image from "next/image";

const skills = [
  { name: "HTML", percentage: "90%", logo: "/img/skills-logo/logo-html.webp" },
  { name: "CSS", percentage: "80%", logo: "/img/skills-logo/logo-css.webp" },
  { name: "JavaScript", percentage: "60%", logo: "/img/skills-logo/logo-js.jpg" },
  { name: "TypeScript", percentage: "60%", logo: "/img/skills-logo/logo-ts.png" },
  { name: "Bootstrap", percentage: "50%", logo: "/img/skills-logo/logo-bootstrap.png" },
  { name: "Tailwind", percentage: "80%", logo: "/img/skills-logo/logo-tailwind.webp" },
  { name: "React", percentage: "50%", logo: "/img/skills-logo/logo-react.png" },
  { name: "Node.js", percentage: "40%", logo: "/img/skills-logo/logo-node.png" },
];

export default function SkillsSection() {
    
  return (
    <>
    <section id="skills" className="bg-[#ac8968] w-full">
      <h1 className=" text-2xl lg:text-5xl font-bold text-center bg-[#3e362e] text-[#865d36] py-2 shadow-md">
        Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10 py-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-48 h-auto mx-auto bg-[#a69080] rounded-lg shadow-[#3e362e] shadow-lg border-2 border-transparent hover:border-gray-800 transition-all text-center pb-4"
          >
            <h2 className="text-lg font-semibold text-gray-800 mt-4">{skill.name}</h2>
            <span className="block text-sm font-bold text-gray-600 mb-2">
              {skill.percentage}
            </span>
            <div className="relative flex justify-center items-center">
              <div
                className={`relative w-28 h-28 rounded-full flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-300`}
                style={{
                  background: `conic-gradient(#3e362e 0% ${
                    skill.percentage
                  }, #d3d3d3 ${skill.percentage} 100%)`,
                }}
              >
                <Image
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};


