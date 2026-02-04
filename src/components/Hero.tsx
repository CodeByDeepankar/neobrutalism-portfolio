const Hero = () => {
  return (
    <section className="mb-16">
      <div className="neobrutalist-card border-4 border-black p-8 mb-12">
        <h2 className="neobrutalist-h2 mb-6">HELLO, I'M DEEPANKAR SAHOO</h2>
        <p className="text-xl mb-8 font-bold">
          FULLSTACK DEVELOPER BASED IN NEW DELHI, INDIA
        </p>
        <p className="mb-8 text-lg">
          I specialize in building modern web applications that combine beautiful design with robust functionality. 
          With expertise spanning both frontend and backend technologies, I create seamless digital experiences that solve real-world problems.
        </p>
        <div className="flex space-x-4">
          <a href="#projects" className="neobrutalist-btn">VIEW PROJECTS</a>
          <a href="#contact" className="neobrutalist-btn" style={{ backgroundColor: '#00ff00', color: '#000' }}>CONTACT ME</a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="neobrutalist-card border-4 border-black p-6 text-center">
          <h3 className="neobrutalist-h3 mb-4">FRONTEND</h3>
          <p>React, Next.js, TypeScript, Tailwind CSS and modern UI/UX implementation</p>
        </div>
        <div className="neobrutalist-card border-4 border-black p-6 text-center">
          <h3 className="neobrutalist-h3 mb-4">BACKEND</h3>
          <p>Node.js, Express, Python, Django and database management</p>
        </div>
        <div className="neobrutalist-card border-4 border-black p-6 text-center">
          <h3 className="neobrutalist-h3 mb-4">DEVOPS</h3>
          <p>Docker, AWS, CI/CD and deployment solutions</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;