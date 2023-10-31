import { Dispatch, SetStateAction } from "react";
import { Theme } from "../../context/theme2.context";

export interface ThemeSelectorProps {
    theme: string,
    setTheme: Dispatch<SetStateAction<Theme>>;
}