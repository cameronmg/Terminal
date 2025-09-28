import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(
      rerender,
      currentCommand,
      "projects",
      projects.map(({ id }) => id)
    )) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", projects.map(project => `${project.id}`)) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        This command tracks the builds I'm focused on next. Fresh entries are
        on the way.
      </ProjectsIntro>
      {projects.length === 0 ? (
        <ProjectDesc>
          I'm curating a fresh set of projects right now. Check back soon for
          updates.
        </ProjectDesc>
      ) : (
        projects.map(({ id, title, desc }) => (
          <ProjectContainer key={id}>
            <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
            <ProjectDesc>{desc}</ProjectDesc>
          </ProjectContainer>
        ))
      )}
      <Usage cmd="projects" marginY />
    </div>
  );
};

// TODO: Add Cameron Gonzalez project entries (id, title, desc, url).
const projects: { id: number; title: string; desc: string; url: string }[] = [];

export default Projects;
