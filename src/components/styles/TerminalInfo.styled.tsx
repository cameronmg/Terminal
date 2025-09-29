import styled from "styled-components";

export const Wrapper = styled.span`
  display: inline-block;
  margin-right: 1ch; /* exactly one space after prompt */
  @media (max-width: 550px) {
    display: none; /* hide long prompt on small screens in favor of '>' */
  }
`;

export const WebsiteName = styled.span`
  color: ${({ theme }) => theme.colors?.primary};
`;

export const User = styled.span`
  color: ${({ theme }) => theme.colors?.secondary};
`;
