import { skillsData } from '../assets/assets';

const Skills = () => {
  return (
    <div id="skills" className="py-20">
      <div className="page-width">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-[#f1f1f1] sm:text-5xl font-bold mb-6">
            <span className="text-red-700">Technical </span>
            Skills
          </h2>

          <p className="text-[#f1f1f1] text-xl max-w-3xl mx-auto">
            Turning modern technologies into immersive digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl border border-gray-800 bg-[#111]
              hover:border-red-600 hover:-translate-y-2 transition-all duration-300 shadow-xl overflow-hidden"
            >
              {/* Glow Background Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-red-600 transition duration-300"></div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center 
              border border-gray-700 mb-5 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] transition"
              >
                <skill.icon className="w-7 h-7 text-red-600" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {skill.title}
              </h3>

              {/* Technologies */}
              <ul className="text-gray-300 text-sm space-y-2">
                {skill.technologies.map((tech, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
