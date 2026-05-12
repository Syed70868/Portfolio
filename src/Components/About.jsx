import { profileData } from '../assets/assets';

const About = () => {
  return (
    <div id="about" className="py-20">
      <div className="page-width">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="text-red-600">About </span>
            Me
          </h2>

          <p className="text-[#f1f1f1] text-xl max-w-3xl mx-auto">
            Passionate developer with expertise in modern web technologies and a
            commitment to building exceptional digital experiences.
          </p>
        </div>

        {/* About Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profileData?.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-gray-800 bg-[#111]
              hover:border-red-600 hover:-translate-y-2 transition-all duration-300 shadow-xl overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-red-600 transition duration-300"></div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center
                border border-gray-700 mb-5 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] transition"
              >
                {item.icon && <item.icon className="w-7 h-7 text-red-600" />}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>

              {/* Technologies */}
              <ul className="text-gray-300 text-sm space-y-2">
                {item.technologies?.map((tech, i) => (
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

export default About;
