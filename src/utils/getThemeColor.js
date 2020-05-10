const getThemeColor = () => {
  const theme = typeof window !== "undefined" && window.__theme

  if (theme === "light") return "#dba2b7"
  if (theme === "dark") return "#243447"
}

export default getThemeColor
