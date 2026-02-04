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
              I'm a passionate developer and designer with expertise in creating 
              digital experiences that combine functionality with striking aesthetics.
            </p>
            <p className="mb-4">
              My journey began with traditional graphic design and evolved into 
              full-stack development, allowing me to bridge the gap between visual 
              creativity and technical implementation.
            </p>
            <p>
              I specialize in neobrutalist design principles, embracing raw, honest 
              interfaces that prioritize usability while making bold visual statements.
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
              <span>UI/UX Design</span>
              <span>★★★★☆</span>
            </li>
            <li className="flex justify-between border-b-2 border-dashed border-black pb-2">
              <span>Backend Development</span>
              <span>★★★★☆</span>
            </li>
            <li className="flex justify-between border-b-2 border-dashed border-black pb-2">
              <span>Database Management</span>
              <span>★★★☆☆</span>
            </li>
          </ul>
        </div>
        
        <div className="neobrutalist-card border-4 border-black p-6">
          <h3 className="neobrutalist-h3 mb-4">TOOLS & TECHNOLOGIES</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'CSS', 'Tailwind', 'Figma', 'Git'].map((tech) => (
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