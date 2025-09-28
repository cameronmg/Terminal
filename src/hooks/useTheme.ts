import { useEffect, useState } from "react";
import themes from "../components/styles/themes";
import { setToLS, getFromLS } from "../utils/storage";
import { DefaultTheme } from "styled-components";

export const useTheme = () => {
  const [theme, setTheme] = useState<DefaultTheme>(themes["green-goblin"]);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: DefaultTheme) => {
    setToLS("tsn-theme", mode.name);
    setTheme(mode);
  };

  useEffect(() => {
    const next = themes["green-goblin"]; // enforce black + green theme by default
    setToLS("tsn-theme", next.name);
    setTheme(next);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};
