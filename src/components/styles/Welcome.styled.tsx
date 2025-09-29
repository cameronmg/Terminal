import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;

  @media (max-width: 932px) {
    margin-bottom: 1.5rem;
  }

  .info-section {
    width: 100%;
  }
`;

export const PreName = styled.pre`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  text-align: left;
  white-space: pre;
  font-family: 'IBM Plex Mono', monospace;
  line-height: 1;
  padding: 0 0.5rem;
  max-width: 100%;
  overflow: hidden;
  /* Dynamically scale ASCII to viewport, capped for readability.
     Account for terminal padding (1.25rem*2) + local padding (0.5rem*2) = 3.5rem */
  font-size: clamp(3px, calc((100vw - 3.5rem) / 68), 16px);
  @media (max-width: 360px) {
    /* Tighten spacing slightly on very small screens */
    letter-spacing: -0.25px;
  }
`;

export const PreWrapper = styled.div`
  text-align: center;
`;

export const PreNameMobile = styled.pre`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  white-space: pre;

  @media (min-width: 550px) {
    display: none;
  }
`;

export const PreImg = styled.pre`
  width: 100%;
  text-align: center;
  white-space: pre;
  @media (max-width: 550px) {
    display: none;
  }
`;

export const PreKiki = styled.pre`
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  white-space: pre;
`;

export const Seperator = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const Cmd = styled.span`
  color: ${({ theme }) => theme.colors?.primary};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors?.secondary};
  text-decoration: none;
  line-height: 1.5rem;
  white-space: nowrap;
  border-bottom: 2px dashed ${({ theme }) => theme.colors?.secondary};

  &:hover {
    border-bottom-style: solid;
  }
`;
