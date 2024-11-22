const ContactSection = () => {
    return (
      <section id="contact" className="py-10 bg-[#ac8968] text-[#3e362e]">
        <h1 className="text-3xl font-bold text-center py-5">Contact Form</h1>
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10 p-4 border-2 border-[#3e362e]">
          {/* Chat Info */}
          <div className="text-center lg:text-left bg-[#ac8968]">
            <h3 className="text-xl font-bold text-[#3e362e]">Let's Chat</h3>
            <p className="text-black mt-2">
              {`I’m excited to hear your thoughts and ideas. Whether you have
              questions or just want to share ideas, drop me a message!`}
            </p>
          </div>
  
          {/* Contact Form */}
          <form
            method="post"
            className="bg-[#3e362e] shadow-md rounded-lg p-6 w-full"
          >
            <label
              htmlFor="name"
              className="block text-md font-semibold text-white"
            >
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Full Name"
              required
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
  
            <label
              htmlFor="email"
              className="block text-md font-semibold text-white mt-4"
            >
              Email ID:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              required
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
  
            <label
              htmlFor="message"
              className="block text-md font-semibold text-white mt-4"
            >
              Message:
            </label>
            <textarea
              id="message"
              placeholder="Write your message..."
              required
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
  
            <button
              type="submit"
              className="w-full mt-4 py-2 bg-[#ac8968] text-[#3e362e] font-bold rounded-lg hover:shadow-[#ac8968] hover:shadow-sm"
            >
              Send Message
            </button>
            <p
              id="msg-sent"
              className="text-green-600 font-semibold text-center mt-2 hidden"
            >
              Message sent successfully!
            </p>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  