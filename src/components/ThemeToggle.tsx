import { useTheme } from "../context/ThemeContext"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Alternar para tema ${theme === "light" ? "escuro" : "claro"}`}
    >
      <div className="toggle-track">
        <div className="toggle-thumb">
          <span className="toggle-icon">{theme === "light" ? "🌙" : "☀️"}</span>
        </div>
      </div>
    </button>
  )
}
