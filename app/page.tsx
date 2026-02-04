'use client';

import { useState } from 'react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const projects = [
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
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="neobrutalist py-8 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="neobrutalist-h1 flicker-animation">PORTFOLIO</h1>
            <nav>
              <ul className="flex space-x-6">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveSection(item.id)}
                      className={`neobrutalist-btn ${activeSection === item.id ? 'bg-red-600' : ''}`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        {activeSection === 'home' && (
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
        )}

        {/* About Section */}
        {activeSection === 'about' && (
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
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="mb-16">
            <h2 className="neobrutalist-h2 mb-8">PROJECTS</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="neobrutalist-card border-4 border-black p-6">
                  <h3 className="neobrutalist-h3 mb-3">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
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
                  <button className="neobrutalist-btn w-full">VIEW PROJECT</button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="mb-16">
            <h2 className="neobrutalist-h2 mb-8">CONTACT</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="neobrutalist-card border-4 border-black p-8">
                <h3 className="neobrutalist-h3 mb-6">GET IN TOUCH</h3>
                
                <form className="space-y-6">
                  <div>
                    <label className="block mb-2 font-bold">NAME</label>
                    <input 
                      type="text" 
                      className="neobrutalist-input w-full" 
                      placeholder="YOUR NAME"
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 font-bold">EMAIL</label>
                    <input 
                      type="email" 
                      className="neobrutalist-input w-full" 
                      placeholder="YOUR EMAIL"
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 font-bold">MESSAGE</label>
                    <textarea 
                      rows={4} 
                      className="neobrutalist-input w-full" 
                      placeholder="YOUR MESSAGE"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="neobrutalist-btn w-full">SEND MESSAGE</button>
                </form>
              </div>
              
              <div className="neobrutalist-card border-4 border-black p-8">
                <h3 className="neobrutalist-h3 mb-6">CONTACT INFO</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold">📧</div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">EMAIL</h4>
                      <p>hello@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold">📱</div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">PHONE</h4>
                      <p>+1 (123) 456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold">📍</div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">LOCATION</h4>
                      <p>San Francisco, CA</p>
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <h4 className="font-bold mb-4">SOCIAL LINKS</h4>
                    <div className="flex space-x-4">
                      {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((platform) => (
                        <a 
                          key={platform} 
                          href="#" 
                          className="neobrutalist-btn text-sm px-3 py-2"
                          style={{ backgroundColor: '#000', color: '#fff' }}
                        >
                          {platform}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="neobrutalist bg-black text-white py-8 border-t-4 border-white">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© {new Date().getFullYear()} DEEPANKAR'S PORTFOLIO. ALL RIGHTS RESERVED.</p>
          <p>DESIGNED & BUILT WITH NEOBRUTALISM PRINCIPLES</p>
        </div>
      </footer>
    </div>
  );
}