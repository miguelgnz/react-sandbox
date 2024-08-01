"use client";
import { useThemeContext } from "@/context/Theme";

export default function ColorCard() {
  const { backgroundColor } = useThemeContext();

  return (
    <div
      style={{
        width: "10rem",
        height: "10rem",
        border: "1px solid",
        margin: "50px",
        backgroundColor: `${backgroundColor}`,
      }}
    >
      hey bro
    </div>
  );
}
