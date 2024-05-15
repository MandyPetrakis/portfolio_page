import ProjectCard from "./project-card";

export default function Projects() {
  const liStyle = "text-sm font-paragraph text-left mb-2";
  const techStyle = "font-semibold mx-1";

  const projectData = [
    {
      name: "Intent",
      description:
        "Distraction-free productivity manager with habit, sleep, and hydration trackers, calendars, and to-do list built for a neurodivergent user",
      details: (
        <>
          <li className={liStyle}>
            Engineered a full-stack application utilizing
            <span className={techStyle}>Next.js</span>
            to seamlessly render<span className={techStyle}>React</span>
            components server side, resulting in enhanced performance and
            improved user experience
          </li>
          <li className={liStyle}>
            Incorporated
            <span className={techStyle}>Typescript</span>into the development
            stack to ensure robust type safety, fostering future scalability and
            facilitating seamless collaboration among future team members
          </li>
          <li className={liStyle}>
            Implemented<span className={techStyle}>PostgreSQL</span>to drive the
            backend of the application, employing advanced query techniques,
            indexing strategies, and data constraints to elevate database
            performance and reliability
          </li>
          <li className={liStyle}>
            This passion project is a work in progress
          </li>
        </>
      ),
      image: "src/assets/bujo.png",
      gitHub: (
        <div className=" cursor-pointer">
          <a
            href="https://github.com/MandyPetrakis/bujo_2.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-10 w-10" src="src/assets/github-mark.png" />
          </a>
        </div>
      ),
    },
    {
      name: "Playlist Builder",
      description:
        "Build playlists and explore playlists from other users with mildly entertaining Faker data",
      details: (
        <>
          <li className={liStyle}>
            Engineered a comprehensive web application by implementing a
            <span className={techStyle}>React</span>
            front-end coupled with a<span className={techStyle}>Rails</span>
            back-end, enhancing user experience and streamlining functionality
          </li>
          <li className={liStyle}>
            Implemented<span className={techStyle}>Bcrypt</span>
            to secure user data, ensuring robust protection of customer
            information and data safety
          </li>
          <li className={liStyle}>
            Designed detailed styling using
            <span className={`${techStyle} mr-0`}>Tailwind CSS</span>,
            replicating the aesthetic of Spotify to elevate the visual
            experience and interactivity
          </li>
          <li className={liStyle}>
            Enhanced user experience with a
            <span className={techStyle}>React Drag-and-Drop</span>
            library to re-order songs in a user's playlist
          </li>
        </>
      ),
      image: "src/assets/playlist.png",
      gitHub: (
        <div className=" cursor-pointer">
          <a
            href="https://github.com/MandyPetrakis/playlist-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-10 w-10" src="src/assets/github-mark.png" />
          </a>
        </div>
      ),
    },

    {
      name: "Prosocial",
      description:
        "Store contact information and organize contacts into communities",
      details: (
        <>
          <li className={liStyle}>
            Managed asynchronous state seamlessly using
            <span className="font-semibold mx-1">TanStack Query</span>and
            <span className="font-semibold ml-1">Zustand</span>, significantly
            boosting performance and ensuring a responsive user experience
          </li>
          <li className={liStyle}>
            Structured the
            <span className={techStyle}>React</span>
            front-end in tandem with a robust
            <span className={techStyle}>Rails</span>
            back-end, optimizing the organization for efficient development and
            enhanced system reliability
          </li>
          <li className={liStyle}>
            Developed an MVP while strategically planning for long-term success,
            laying out a comprehensive feature roadmap to guide the
            application's growth and evolution
          </li>
        </>
      ),
      image: "src/assets/prosocial.png",
      gitHub: (
        <div className=" cursor-pointer">
          <a
            href="https://github.com/MandyPetrakis/prosocial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-10 w-10" src="src/assets/github-mark.png" />
          </a>
        </div>
      ),
    },
  ];

  const projectCards = projectData.map((p, index) => (
    <ProjectCard project={p} key={index} />
  ));
  return (
    <div className="p-10 flex flex-col min-h-dvh justify-center bg-white max-w-dvh">
      <h1 className="font-bold text-4xl mb-3 place-self-center">Projects</h1>
      <p className="place-self-center font-paragraph">(hover for details)</p>
      <div className="md:flex grow items-center justify-start md:overflow-x-scroll md:px-[350px] md:snap-x md:snap-proximity">
        {projectCards}
      </div>
    </div>
  );
}
