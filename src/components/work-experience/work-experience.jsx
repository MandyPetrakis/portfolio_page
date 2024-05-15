export default function WorkExperience() {
  const liStyle = "mb-1";
  return (
    <div className="w-1/2 py-20 px-10 bg-light flex flex-col  h-dvh ">
      <h1 className="font-semibold text-4xl mb-20 place-self-center">
        Experience
      </h1>
      <div className="flex justify-between w-full mb-2">
        <h2 className="text-lg font-semibold">Lululemon</h2>
        <h3 className="font-paragraph text-md">March 2015 - May 2022</h3>
      </div>
      <h3 className="font-paragraph text-md mb-5 italic">Store Manager</h3>
      <ul className="font-paragraph text-sm list-disc px-10 overflow-scroll">
        <li className={liStyle}>
          Led large retail teams of 40+ individuals, created strategies to
          streamline operations, improved team culture, and increased guest
          satisfaction.
        </li>
        <li className={liStyle}>
          Exceeded company and industry trends in learning and development,
          inclusion, and communication as reflected in the self-rated employee
          results of 97% satisfaction in these areas.
        </li>
        <li className={liStyle}>
          Developed training structures to improve leadership team competency
          resulting in 100% leadership level retention and multiple manager
          promotions.
        </li>
        <li className={liStyle}>
          Facilitated onboarding as Head Regional Trainer for North and South
          Carolina's Assistant Managers and Ambassadors on an as-needed and
          annual basis, respectively.
        </li>
        <li className={liStyle}>
          Created and facilitated data-driven training content for regional and
          area audiences that increased store performance and built leadership
          pipelines, delivered weekly.
        </li>
        <li className={liStyle}>
          Continuously assessed each business, using data and trends to
          prioritize the deployment of time and resources where they would have
          the greatest impact, pivoting as appropriate in the fast-paced retail
          environment.
        </li>
      </ul>
    </div>
  );
}
