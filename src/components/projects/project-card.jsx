export default function ProjectCard({ project }) {
  return (
    <div className="group h-[450px] min-w-[690px] perspective-[1000px] md:mx-5 mb-5 md:mb-0 snap-center">
      <div className="relative h-full w-full shadow-dark shadow-md transition-all duration-500  group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0  transition-all duration-500 group-hover:opacity-0">
          <img
            className="h-full w-full  object-cover shadow-xl shadow-dark"
            src={project.image}
            alt={project.name}
          />
        </div>
        <div className="absolute inset-0 h-full w-full bg-light transition-all duration-500 px-12 py-5 text-center opacity-0 group-hover:opacity-100 transform:rotateY(180deg) group-hover:[transform:rotateY(180deg)]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <h1 className="text-lg font-bold mb-3">{project.name}</h1>
            <p className="text-sm font-paragraph mb-3 italic">
              {project.description}
            </p>
            <ul className="list-disc mb-5">{project.details}</ul>
            {project.gitHub}
          </div>
        </div>
      </div>
    </div>
  );
}
