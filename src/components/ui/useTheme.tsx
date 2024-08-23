import { useTheme as useNextThemes } from 'next-themes';

const useTheme = () => {
  const { theme, setTheme } = useNextThemes();
  return { theme, setTheme };
};

export default useTheme;
