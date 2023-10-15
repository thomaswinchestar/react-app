import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="primary" onClick={() => console.log("Clicked!")}>
        Hello World
      </Button>
    </div>
  );
}
export default App;
