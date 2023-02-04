import "./App.css";
import { 
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset 
} from "@chakra-ui/react";
import { TodoList } from "pages";

{/* ToDo: improve overall ook of the application  */}
{/* ToDo: add toasts  */}

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
