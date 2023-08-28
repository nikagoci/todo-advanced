import { useState, useEffect } from 'react'

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>("light")

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return { theme, setTheme }
}

export default useTheme