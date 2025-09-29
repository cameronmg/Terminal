import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1.25rem;
  padding-top: 0.75rem;

  display: flex;
  flex-direction: column-reverse;
  /* Avoid mobile 100vh issues (URL bar) */
  max-height: calc(100vh - 2rem);
  @supports (height: 100dvh) {
    max-height: calc(100dvh - 2rem);
  }
  @supports (height: 100svh) {
    max-height: calc(100svh - 2rem);
  }
  overflow-y: auto;
  /* Prevent horizontal overflow on narrow devices */
  overflow-x: hidden;
  word-break: break-word;
  overflow-wrap: anywhere;
`;

export const CmdNotFound = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 1rem;
`;

export const Empty = styled.div`
  margin-bottom: 0.25rem;
`;

export const MobileSpan = styled.span`
  line-height: 1.5rem;
  margin-right: 1ch;

  @media (min-width: 550px) {
    display: none;
  }
`;

export const MobileBr = styled.br`
  display: none;
`;

export const Form = styled.form`
  display: flex;
  align-items: baseline;
  flex-wrap: nowrap;
`;

export const Input = styled.input`
  flex: 1 1 auto;
  min-width: 0; /* prevent overflow in flex containers */
  width: auto;
`;

export const Hints = styled.span`
  margin-right: 0.875rem;
`;
