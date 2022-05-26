import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext/themeContext";

import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";


const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function isDark() {
    return theme === "dark";
  }

  function toggleTheme(e) {
    setTheme(e.target.checked ? "dark" : "light");
  }

  return (
    <div className="flex">
      <div className="mt-1.5 mr-2">
        {
          theme === 'light' ? <HiOutlineSun className="text-orange-500" /> : <HiOutlineMoon className="text-gray-400" />
        }
      </div>
      <label className="switch mt-1.5">
        <input
          type="checkbox"
          checked={isDark()}
          onChange={(e) => toggleTheme(e)}
        />
        <span className="slider round"></span>
      </label>
      
    </div>
  );
};

export default Toggle;
