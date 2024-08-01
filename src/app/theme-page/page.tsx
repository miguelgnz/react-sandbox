
import { ThemeContextProvider } from "@/context/Theme";
import ColorCard from "@/components/ColorCard";
import ChangeColorButton from "@/components/ChangeColorButton";
import Characters from "@/components/Characters";

export default function ThemePage() {
  return (
    <>
      <ThemeContextProvider>
        <h1>This is the theme Page</h1>
        <ColorCard />
        <ChangeColorButton />
        <Characters />
      </ThemeContextProvider>
    </>
  );
}
