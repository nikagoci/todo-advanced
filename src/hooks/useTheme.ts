import { useState, useEffect } from 'react'

const useTheme = () => {
  const initialTheme: ThemeType = localStorage.getItem("theme") as ThemeType || "light"
  const [theme, setTheme] = useState<ThemeType>(initialTheme)

  useEffect(() => {
    localStorage.setItem("theme", theme)
    if (theme === 'dark') {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return { theme, setTheme }
}

export default useTheme