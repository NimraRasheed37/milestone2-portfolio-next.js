export default function Footer() {

    return (
        <>
      <footer className="w-full border-t-4 border-[#3e362e] bg-[#ac8968] text-[#3e362e] py-12 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_400px_300px] gap-8">
        {/* Moto Section */}
        <div className="text-left border-b md:border-b-0 md:border-r-2 border-gray-800 pb-8 md:pb-0">
          <h4 className="text-2xl font-bold text-gray-900">Nimra Rasheed</h4>
          <p className="text-lg mt-4 font-semibold">
            {`Crafting meaningful web experiences with passion and care.`}
                      </p>
        </div>

        {/* Links Section */}
        <div className="lg:border-r-2 border-gray-800 pr-8">
          <h4 className="text-xl font-bold text-[#3e362e] mb-4">Explore Portfolio</h4>
          <div className="space-y-4">
            <a href="#about" className="block text-lg font-semibold hover:underline">
              About
            </a>
            <a href="#skills" className="block text-lg font-semibold hover:underline">
              Skills
            </a>
            <a href="#projects" className="block text-lg font-semibold hover:underline">
              Projects
            </a>
            <a href="#contact" className="block text-lg font-semibold hover:underline">
              Contact Me
            </a>
          </div>
        </div>
  
        {/* Connect Section */}
        <div>
          <h4 className="text-xl font-bold text-[#3e362e] mb-4">{`Let's connect`}</h4>
          <div className="space-y-4">
            <a
              href="https://www.linkedin.com/in/nimra-rasheed-45a362125"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="block text-lg font-semibold hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/NimraRasheed37"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="block text-lg font-semibold hover:underline"
            >
              Github
            </a>
            <button
            //   onClick={() => alert('Send Email functionality not implemented yet')}
              aria-label="Email"
              className="block text-lg font-semibold hover:underline"
            >
              Email
            </button>
          </div>
        </div>
      </footer>
      </>
    );
  };
  

  