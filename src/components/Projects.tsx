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
      title: 'E-commerce Platform',
      description: 'A full-featured online shopping platform with payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Productivity application for managing personal and team tasks.',
      technologies: ['TypeScript', 'Firebase', 'Tailwind CSS'],
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather information with forecasting features.',
      technologies: ['JavaScript', 'API Integration', 'Chart.js'],
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Dashboard for tracking social media metrics and engagement.',
      technologies: ['Python', 'React', 'PostgreSQL'],
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'Mobile-first application for tracking workouts and nutrition.',
      technologies: ['React Native', 'Redux', 'GraphQL'],
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Custom portfolio site with neobrutalist design principles.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
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
            <button className="neobrutalist-btn mt-auto">VIEW PROJECT</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;