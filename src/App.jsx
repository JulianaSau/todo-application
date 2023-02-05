import "./App.css";
import { 
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset 
} from "@chakra-ui/react";
import { TodoList } from "pages";

{/* ToDo: improve overall look of the application  */}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <TodoList />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
