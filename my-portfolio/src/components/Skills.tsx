interface Skill {
  name: string;
  level: string;
}

export default function Skills() {
  const skills: Skill[] = [
    { name: "HTML", level: "90%" },
    { name: "CSS/SCSS", level: "85%" },
    { name: "JavaScript", level: "90%" },
    { name: "React", level: "85%" },
    { name: "TypeScript", level: "80%" },
    { name: "Python", level: "90%" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-dark text-text">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-accent mb-8 text-center">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Technical Skills */}
          <div className="bg-dark-light p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-accent">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div
                    className="h-full bg-accent rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="bg-dark text-text p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">✓</span> Problem Solving
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span> Communication
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}