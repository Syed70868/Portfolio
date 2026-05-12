import NavBar from '../Components/NavBar';
import { assets, profileData } from '../assets/assets';

const ResumePage = () => {
  return (
    <div>
      <NavBar />
      <div className="page-width pt-28 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white">Resume</h1>
          <p className="text-[#f1f1f1] text-lg max-w-3xl mx-auto mt-4">
            Download the latest CV, explore my experience, and view highlights
            from my most successful projects.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] items-start">
          <div className="rounded-3xl border border-gray-800 bg-[#111] p-10 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-6">Download CV</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Get the full details of my professional background, skills,
              education, and project experience in a polished resume format.
            </p>
            <a
              href={assets.CV}
              download
              className="inline-block rounded-full border border-red-600 bg-red-600 px-8 py-4 text-white font-semibold transition hover:bg-red-700"
            >
              Download CV
            </a>
          </div>

          <div className="space-y-6">
            {profileData.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-gray-800 bg-[#111] p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <ul className="text-gray-300 space-y-3">
                  {item.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-600 block"></span>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
