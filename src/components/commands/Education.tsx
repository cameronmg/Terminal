import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>
        Here's a snapshot of my formal learning journey and certifications.
      </EduIntro>
      {eduBg.length === 0 ? (
        <EduList>
          <div className="title">Education updates coming soon</div>
          <div className="desc">
            I'm compiling the highlights from my academic path. Check back for
            specifics.
          </div>
        </EduList>
      ) : (
        eduBg.map(({ title, desc }) => (
          <EduList key={title}>
            <div className="title">{title}</div>
            <div className="desc">{desc}</div>
          </EduList>
        ))
      )}
    </Wrapper>
  );
};

// TODO: Add Cameron Gonzalez education history (title, description pairs).
const eduBg: { title: string; desc: string }[] = [];

export default Education;
