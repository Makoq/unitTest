import React, { useState, useEffect } from "react";
const useDarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("prefers-color-scheme: dark");
    //设置当前的模式
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e: any) => setIsDarkMode(e.matches);
    console.log("_dark", darkModeMediaQuery.matches);
    //监听变化
    darkModeMediaQuery.addListener(handleChange);

    return () => darkModeMediaQuery.removeListener(handleChange);
  }, []);
  return isDarkMode;
};
export default useDarkModeToggle;
