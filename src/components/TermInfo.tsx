import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>friend</User>@<WebsiteName>github.com/cameronmg</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
