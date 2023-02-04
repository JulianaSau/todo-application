import { useState } from "react";
import "./App.css";
import { 
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset 
} from "@chakra-ui/react";
import { ThemeToggler } from './components'
import { TodoList } from "./pages";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <ThemeToggler />
        <TodoList />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
