import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && <Alert>My Alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Hello World
      </Button>
    </div>
  );
}
export default App;
