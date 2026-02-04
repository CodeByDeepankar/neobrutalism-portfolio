const Hero = () => {
  return (
    <section className="mb-16">
      <div className="neobrutalist-card border-4 border-black p-8 mb-12">
        <h2 className="neobrutalist-h2 mb-6">HELLO, I'M DEEPANKAR</h2>
        <p className="text-xl mb-8 font-bold">
          CREATIVE DEVELOPER & DESIGNER
        </p>
        <p className="mb-8 text-lg">
          I craft digital experiences with a focus on clean code and bold design. 
          My approach combines technical expertise with creative problem-solving.
        </p>
        <div className="flex space-x-4">
          <a href="#projects" className="neobrutalist-btn">VIEW PROJECTS</a>
          <a href="#contact" className="neobrutalist-btn" style={{ backgroundColor: '#00ff00', color: '#000' }}>CONTACT ME</a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="neobrutalist-card border-4 border-black p-6 text-center">
          <h3 className="neobrutalist-h3 mb-4">DESIGN</h3>
          <p>Bold, expressive visuals with intentional imperfections that create character</p>
        </div>
        <div className="neobrutalist-card border-4 border-black p-6 text-center">
          <h3 className="neobrutalist-h3 mb-4">DEVELOP</h3>
          <p>Clean, efficient code that brings designs to life with modern technologies</p>
        </div>
        <div className="neobrutalist-card border-4 border-black p-6 text-center">
          <h3 className="neobrutalist-h3 mb-4">DELIVER</h3>
          <p>Polished products that meet both aesthetic and functional requirements</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;