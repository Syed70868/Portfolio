import { projectData } from '../assets/assets';

const Work = () => {
  return (
    <div id="work" className="py-20">
      <div className="page-width py-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            FEATURED
            <span className="text-red-600 text-4xl sm:text-5xl font-bold">
              {' '}
              Projects
            </span>
          </h2>
          <p className="text-[#f1f1f1] text-xl max-w-3xl mx-auto">
            Engineering sleek, high-performance web experiences for the modern
            era.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="group rounded-sm overflow-hidden hover:shadow-lg transition cursor-pointer border-[#2b2b2b] border-solid border-2 hover:-translate-y-1 duration-300"
            >
              <div className="relative flex items-center justify-center">
                <img
                  className="group-hover:opacity-100"
                  src={project.image}
                  alt=""
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-[#f1f1f1] font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-[#f1f1f1]/70">{project.description}</p>
                <div className="flex flex-wrap mt-6 gap-5">
                  {project.tech.map((language, index) => (
                    <span
                      className="px-4 py-1 bg-gray-500 text-sm font-semibold text-[#f1f1f1]/70 rounded-sm"
                      key={index}
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
