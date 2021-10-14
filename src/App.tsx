import { FormServiceProvider } from "./hooks/useFormService";
import { Routes } from "./routes";

function App() {
  return (
    <FormServiceProvider>
      <Routes />
    </FormServiceProvider>
  );
}

export default App;
