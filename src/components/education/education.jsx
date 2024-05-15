export default function Education() {
  const tableHeadData = ["Name", "Date", "Description"];
  const tableRowData = [
    {
      name: "Flatiron School",
      date: "January 2024",
      description: (
        <p>
          <span className="font-semibold mr-1 whitespace-nowrap block">
            Full Stack Software Engineering
          </span>
          program teaching Ruby, Rails, React, and JavaScript, in an
          asynchronous, remote format
        </p>
      ),
    },
    {
      name: "University of Pennsylvania, Wharton School of Business",
      date: "November 2020",
      description: (
        <p>
          <span className="font-semibold mr-1 block whitespace-nowrap">
            Foundations of Business
          </span>
          <span className="font-semibold mr-1 block whitespace-nowrap">
            Specialization Certificate
          </span>
          with curriculum focused on decision making, organizational leadership,
          business optimization, and building high-performing teams
        </p>
      ),
    },
    {
      name: "National Council for Mental Wellbeing",
      date: "February 2022",
      description: (
        <p>
          <span className="font-semibold mr-1 block whitespace-nowrap">
            Mental Health First Aid
          </span>
          an evidence-based, early-intervention course, teaching how to assist
          and support others who may be experiencing a mental health or
          substance use challenge
        </p>
      ),
    },
  ];

  const tableHead = (
    <thead>
      <tr>
        {tableHeadData.map((head) => (
          <th
            key={head}
            className=" border-b-2 border-dark p-5 font-semibold text-lg text-center"
          >
            {head}
          </th>
        ))}
      </tr>
    </thead>
  );

  const tableBody = (
    <tbody className="font-paragraph text-sm">
      {tableRowData.map(({ name, date, description }, index) => {
        const isLast = index === tableRowData.length - 1;
        const classes = isLast ? "p-4 " : "p-4 border-b border-dark";

        return (
          <tr key={name}>
            <td className={`font-semibold ${classes}`}>{name}</td>
            <td className={classes}>{date}</td>
            <td className={classes}>{description}</td>
          </tr>
        );
      })}
    </tbody>
  );

  return (
    <div className="w-1/2 px-10 py-20 bg-medium flex flex-col items-center justify-items-center h-dvh overflow-scroll">
      <h1 className="font-semibold text-4xl mb-20">Education</h1>
      <table className="shadow-md shadow-dark bg-light overflow-scroll">
        {tableHead}
        {tableBody}
      </table>
    </div>
  );
}
