import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // Properly initialize theme from localStorage with a useEffect hook
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or default to "dark"
    return localStorage.getItem("theme") || "dark";
  });

  // Update document when theme changes
  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Simplified toggle function
  const toggleDarkMode = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <div className={theme}>
      <div className="dark:bg-neutral-900 h-screen w-full flex flex-col md:flex-row items-center md:justify-center gap-2">
        <button
          onClick={toggleDarkMode}
          className="h-12 w-12 border-red-500 border rounded-lg dark:bg-neutral-900 dark:text-white"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

// Extract Card to its own component with a more professional content
const Card = () => {
  return (
    <div className="border-2 dark:bg-gray-900 h-1/3 w-3/5 dark:text-white md:h-1/5 md:w-1/5 flex items-center justify-center flex-col p-4 rounded-lg">
      <h3 className="font-medium text-lg">Card Title</h3>
      <p className="text-sm opacity-75">Card description text</p>
    </div>
  );
};

export default App;
