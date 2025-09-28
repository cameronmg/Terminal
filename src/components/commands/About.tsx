import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Cameron Gonzalez</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a full-stack developer</HighlightAlt> based in Houston,
        TX.
      </p>
      <p>
        I love crafting web experiences that blend clean engineering with useful,
        real-world outcomes.
      </p>
    </AboutWrapper>
  );
};

export default About;
