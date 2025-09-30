import About from "./commands/About";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Education from "./commands/Education";
import GeneralOutput from "./commands/GeneralOutput";
import Gui from "./commands/Gui";
import Help from "./commands/Help";
import Welcome from "./commands/Welcome";
import History from "./commands/History";
import Projects from "./commands/Projects";
import Socials from "./commands/Socials";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { useContext } from "react";

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);

  const specialCmds = ["projects", "socials", "echo"];

  // return 'Usage: <cmd>' if command arg is not valid
  // eg: about tt
  //whoami.cam
  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {
        {
          about: <About />,
          clear: <Clear />,
          echo: <Echo />,
          education: <Education />,
          gui: <Gui />,
          help: <Help />,
          history: <History />,
          projects: <Projects />,
          pwd: <GeneralOutput>/Users/cameron</GeneralOutput>,
          socials: <Socials />,
          welcome: <Welcome />,
          whoami: <GeneralOutput>friend</GeneralOutput>,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
