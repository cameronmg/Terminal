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

export const Symbol = styled.span`
  color: #3B82F6; /* blue for ~ $ @ symbols */
`;
