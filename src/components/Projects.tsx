import Image
 from "next/image";
const projects = [
    {
      name: "Ababeel Bookstore",
      image: "/img/projects/ababeel.PNG",
      link: "https://milestone3-ecommerce-store-ababeel-by-nimra.vercel.app/",
    },
    {
      name: "Panacloud",
      image: "/img/projects/panacloud.PNG",
      link: "https://panaclound-final-assignment-by-nimra.vercel.app/",
    },
    {
      name: "Music Player",
      image: "/img/projects/music-player.PNG",
      link: "https://music-player-by-nimra.vercel.app/",
    },
    {
      name: "Foodily Ever After",
      image: "/img/projects/food-recipes.PNG",
      link: "https://react-food-recipe-app-by-nimra.vercel.app/",
    },
    {
      name: "Resume Generator",
      image: "/img/projects/rb1.PNG",
      link: "https://resume-builder-by-nimra.vercel.app/",
    },
    {
      name: "Wallpapers Downloader",
      image: "/img/projects/wallpapers.PNG",
      link: "https://wallpaper-downloader-by-nimra-rasheed.vercel.app/",
    },
    {
      name: "Comforty E-commerce",
      image: "/img/projects/comforty.PNG",
      link: "https://q2-hackathon-by-nimra.vercel.app/",
    },
    {
      name: "Jadoo Travel",
      image: "/img/projects/jadoo.PNG",
      link: "https://figma-to-next-js-beige.vercel.app/",
    },
  ];
  
  export default function ProjectsSection() {
    return (
      <section id="projects">
        <h1 className="text-2xl lg:text-5xl font-bold text-center bg-[#865d36] text-[#3e362e] py-2 shadow-md">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-8 bg-[#3e362e]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="max-w-sm bg-[#ac8968] rounded-lg shadow-[#865d36] shadow-md overflow-hidden mx-auto"
            >
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                  width={300}
                  height={150}
                />
              </div>
              <div className="p-4 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-[#3e362e]">
                  {project.name}
                </h2>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-800 font-bold hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  

  