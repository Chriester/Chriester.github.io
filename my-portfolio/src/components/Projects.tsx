interface Project {
  title: string;
  description: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "E-Commerce Dashboard",
      description: "A responsive dashboard for managing online store data",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my projects and skills",
    },
    {
      title: "Weather App",
      description: "A weather forecasting app using OpenWeather API",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-dark text-text">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-accent mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-dark-light p-6 rounded-lg shadow-sm">
              <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-accent mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}