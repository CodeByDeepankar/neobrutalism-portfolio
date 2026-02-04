const About = () => {
  return (
    <section className="mb-16">
      <h2 className="neobrutalist-h2 mb-8">ABOUT ME</h2>
      
      <div className="neobrutalist-card border-4 border-black p-8 mb-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="border-4 border-black p-2 bg-gray-200 h-64 flex items-center justify-center">
              <span className="text-gray-500">PHOTO PLACEHOLDER</span>
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="neobrutalist-h3 mb-4">MY STORY</h3>
            <p className="mb-4">
              I'm Deepankar, a fullstack developer based in New Delhi, India. I specialize in building modern web applications that combine beautiful design with robust functionality.
            </p>
            <p className="mb-4">
              With expertise spanning both frontend and backend technologies, I create seamless digital experiences that solve real-world problems. I'm passionate about clean code, user experience, and staying current with emerging technologies.
            </p>
            <p>
              My approach combines technical excellence with creative problem-solving. Whether it's building scalable APIs, crafting intuitive interfaces, or optimizing performance, I'm committed to delivering high-quality solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="neobrutalist-card border-4 border-black p-6">
          <h3 className="neobrutalist-h3 mb-4">TECHNICAL SKILLS</h3>
          <ul className="space-y-2">
            <li className="flex justify-between border-b-2 border-dashed border-black pb-2">
              <span>Frontend Development</span>
              <span>★★★★★</span>
            </li>
            <li className="flex justify-between border-b-2 border-dashed border-black pb-2">
              <span>Backend Development</span>
              <span>★★★★☆</span>
            </li>
            <li className="flex justify-between border-b-2 border-dashed border-black pb-2">
              <span>DevOps & Deployment</span>
              <span>★★★★☆</span>
            </li>
            <li className="flex justify-between border-b-2 border-dashed border-black pb-2">
              <span>UI/UX Design</span>
              <span>★★★☆☆</span>
            </li>
          </ul>
        </div>
        
        <div className="neobrutalist-card border-4 border-black p-6">
          <h3 className="neobrutalist-h3 mb-4">TOOLS & TECHNOLOGIES</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Three.js', 'GSAP', 'Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Git', 'Figma', 'Postman'].map((tech) => (
              <span 
                key={tech} 
                className="neobrutalist-btn text-sm px-3 py-1"
                style={{ backgroundColor: '#000', color: '#fff' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;