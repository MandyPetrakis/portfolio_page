import Education from "./components/education/education";
import Header from "./components/header/header";
import Projects from "./components/projects/projects";
import Summary from "./components/summary/summary";
import WorkExperience from "./components/work-experience/work-experience";

function App() {
  return (
    <div className="cursor-default min-w-dvh">
      <Header />
      <Summary />
      <div className="flex">
        <Education />
        <WorkExperience />
      </div>
      <Projects />
    </div>
  );
}

export default App;
