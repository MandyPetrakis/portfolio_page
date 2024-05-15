export default function Summary() {
  const styling = "mb-4 font-paragraph";
  return (
    <div className="flex justify-center items-center min-h-dvh">
      <div className="text-md p-10 w-1/2 bg-white shadow-black shadow-md overflow-scroll max-h-dvh">
        <p className={styling}>Hi! I'm Amanda,</p>
        <p className={styling}>
          I am an aspiring software developer looking to contribute to a company
          where I can expand my engineering skills while fostering a positive
          team culture and enhancing productivity, elements I enjoyed in my
          previous role at Lululemon.
        </p>
        <p className={styling}>
          In January of 2024, I completed the Flatiron School Bootcamp, where I
          gained proficiency in JavaScript, React, and Ruby on Rails. While I
          feel confident in my current skill set, I know there is so much more
          to learn which is why I would like to continue my education through
          the Voyager Bootcamp. Upon completion, my ultimate goal is to
          participate in the Voyager Apprenticeship program where I can apply
          everything I've learned.
        </p>
        <p className="font-paragraph">
          Community connection and personal wellness have always been essential
          parts of my life and my work. I am excited about the opportunity to
          contribute my soft skills and tech skills to a company that employs
          technology to truly foster both of these values.
        </p>
      </div>
    </div>
  );
}
