import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";
export default function About() {
  return (
    <div className="h-auto md:flex px-4 md:px-10 lg:px-20 p-10 justify-evenly items-center gap-8 md:h-auto md:py-24 w-100 bg-[#3e362e]">
      <div className="w-[100%]px-2 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl text-[rgb(134,93,54)] lg:text-5xl font-semibold font-serif">
          NIMRA RASHEED
        </h1>
        <h3 className="w-[80%] mx-auto md:mx-0 bg-[#865d36] text-lg text-[#3e362e] font-bold md:w-60 rounded-sm md:px-2 my-4">
          Front-end Developer
        </h3>
        <p className="w-[100%] mx-auto text-[#ac8968] text-md md:text-lg lg:text-md mb-4">
  {`Hi, I'm Nimra Rasheed, a beginner front-end developer passionate about creating clean, 
  responsive, and user-friendly websites. As I learn and grow, I focus on writing efficient code 
  and building great user experiences with HTML, CSS, and JavaScript. 
  I'm excited to keep improving and bringing ideas to life on the web!`}
</p>
        <button className="bg-[#865d36] font-bold text-[#3e362e] py-2 px-4 rounded-lg">
        <a href="/Nimra's Resume.pdf" download>Download CV</a>
        </button>
      </div>
      <div className="items-center w-[100%]">
        <Image
          className="mt-4  mx-auto md:w-56 md:h-56 md:ml-30 shadow-[#865d36] shadow-lg rounded-full "
          src="/img/nimra.jpg"
          alt="profile photo"
          width={200}
          height={200}
        />
        <ul className="mx-auto px-4 list-type-none flex items-center gap-8 md:ml-30  md:px-8 md:py-2 mt-4 py-2 md:mt-4 border border-[#865d36] w-44 sm:w-56">
          <li>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#865d36] "
            >
              <FontAwesomeIcon icon={faLinkedin} className=" w-6 h-6 sm:w-8 sm:h-8" />            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#865d36]"
            >
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#865d36]"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          </li>
        </ul>

      </div>
    </div>
  );
}
