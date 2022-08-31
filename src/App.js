import "./App.css";

function App() {
  return (
    <div className="App">
      <Info></Info>
      <AddItem></AddItem>
    </div>
  );
}

function Info() {
  const title = "This is my title.";
  const showTitle = true;

  return (
    <div>
      <h1>{showTitle ? title : "No Title"}</h1>
      <p>Manage your stuff.</p>
    </div>
  );
}

function AddItem() {
  const value = "default";

  return (
    <form>
      <label for="text-form">Type something...</label>
      <input type="text" value={value} id="text-form"></input>
    </form>
  );
}

export default App;
