"use client";
import { useThemeContext } from "@/context/Theme";

export default function ChangeColorButton() {
  const { backgroundColor, setBackground } = useThemeContext();

  return (
    <button
      style={{ border: "1px solid red" }}
      onClick={() => {
        setBackground("blue");
        console.log(backgroundColor);
      }}
    >
      Change color here
    </button>
  );
}
