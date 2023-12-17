"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { SunIcon } from "../components/SunIcon";
import { MoonIcon } from "../components/MoonIcon";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div>
      <Switch
        defaultSelected={theme === "dark"}
        size="sm"
        color="secondary"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )
        }
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      ></Switch>
    </div>
  );
};

export default ThemeSwitcher;
