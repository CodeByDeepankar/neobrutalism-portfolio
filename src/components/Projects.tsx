interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'GYANARATNA',
      description: 'Full-Stack Development (Hackathon-winning project)',
      technologies: ['Full-Stack Development'],
    },
    {
      id: 2,
      title: 'NAGARAMITRA',
      description: 'Full-Stack Development project showcasing modern web technologies.',
      technologies: ['Full-Stack Development'],
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="neobrutalist-h2 mb-8">PROJECTS</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="neobrutalist-card border-4 border-black p-6 flex flex-col">
            <h3 className="neobrutalist-h3 mb-3">{project.title}</h3>
            <p className="mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="neobrutalist-btn text-xs px-2 py-1"
                  style={{ backgroundColor: '#000', color: '#fff' }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <a 
              href={project.title === 'GYANARATNA' ? 'https://gyanaratna.vercel.app/' : project.title === 'NAGARAMITRA' ? 'https://nagarmitra-eight.vercel.app/' : '#'}
              className="neobrutalist-btn mt-auto"
            >
              VIEW PROJECT
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;