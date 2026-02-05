const Hero = () => {
  return (
    <section className="mb-16">
      <div className="neobrutalist-card border-4 border-black p-6 sm:p-8 mb-12">
        <h2 className="neobrutalist-h2 mb-4 sm:mb-6 text-center">HELLO, I'M DEEPANKAR SAHOO</h2>
        <p className="text-lg sm:text-xl mb-4 sm:mb-8 font-bold text-center">
          FULLSTACK DEVELOPER BASED IN NEW DELHI, INDIA
        </p>
        <p className="mb-6 sm:mb-8 text-base sm:text-lg text-center">
          I specialize in building modern web applications that combine beautiful design with robust functionality. 
          With expertise spanning both frontend and backend technologies, I create seamless digital experiences that solve real-world problems.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#projects" className="neobrutalist-btn w-full sm:w-auto">VIEW PROJECTS</a>
          <a href="#contact" className="neobrutalist-btn w-full sm:w-auto" style={{ backgroundColor: '#00ff00', color: '#000' }}>CONTACT ME</a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <div className="neobrutalist-card border-4 border-black p-4 sm:p-6 text-center">
          <h3 className="neobrutalist-h3 mb-2 sm:mb-4">FRONTEND</h3>
          <p className="text-sm sm:text-base">React, Next.js, TypeScript, Tailwind CSS and modern UI/UX implementation</p>
        </div>
        <div className="neobrutalist-card border-4 border-black p-4 sm:p-6 text-center">
          <h3 className="neobrutalist-h3 mb-2 sm:mb-4">BACKEND</h3>
          <p className="text-sm sm:text-base">Node.js, Express, Python, Django and database management</p>
        </div>
        <div className="neobrutalist-card border-4 border-black p-4 sm:p-6 text-center">
          <h3 className="neobrutalist-h3 mb-2 sm:mb-4">DEVOPS</h3>
          <p className="text-sm sm:text-base">Docker, AWS, CI/CD and deployment solutions</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;