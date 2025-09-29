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

  /* Reserve space for mobile action button so it doesn't overlap text */
  @media (max-width: 550px) {
    padding-bottom: calc(1.25rem + 72px + env(safe-area-inset-bottom, 0px));
  }
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
  background: transparent !important; /* show background gif through input */
`;

export const Hints = styled.span`
  margin-right: 0.875rem;
`;

export const MobileEnterContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: calc(var(--frame-gap, 16px) + 12px + env(safe-area-inset-bottom, 0px));
  display: flex;
  justify-content: center;
  pointer-events: none; /* allow clicks only on the button */
  z-index: 1000;

  @media (min-width: 551px) {
    display: none;
  }
`;

export const MobileEnterButton = styled.button`
  pointer-events: auto;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 700;
  border: none;
  border-radius: 9999px;
  padding: 0.875rem 1.25rem;
  min-width: 110px;
  line-height: 1;
  color: #000000; /* black text when enabled */
  /* Use the same green as terminal text for strong contrast */
  background: ${({ theme }) => theme.colors?.text[100]};
  cursor: pointer; /* show hand cursor when enabled */
  box-shadow: 0 6px 18px rgba(0,0,0,0.3);
  transform: translateZ(0);
  transition: transform 150ms ease, box-shadow 150ms ease, filter 150ms ease, opacity 150ms ease;

  &:hover, &:active {
    transform: scale(1.06);
    filter: brightness(1.05);
  }

  &:disabled {
    background: #6b7280; /* gray when no input */
    color: #0a0a0a;
    opacity: 0.8;
    cursor: not-allowed; /* override pointer when disabled */
    transform: none;
    filter: none;
  }
`;
