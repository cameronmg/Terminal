import { UsageDiv } from "./styles/Output.styled";

type Props = {
  cmd: "projects" | "socials";
  marginY?: boolean;
};

const arg = {
  projects: { placeholder: "project-id", example: "1" },
  socials: { placeholder: "social-no", example: "1" },
} as const;

const Usage: React.FC<Props> = ({ cmd, marginY = false }) => {
  const action = "go";
  return (
    <UsageDiv data-testid={`${cmd}-invalid-arg`} marginY={marginY}>
      Usage: {cmd} {action} &#60;{arg[cmd].placeholder}&#62; <br />
      eg: {cmd} {action} {arg[cmd].example}
    </UsageDiv>
  );
};

export default Usage;
