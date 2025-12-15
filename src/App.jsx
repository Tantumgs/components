function Welcome(props) {
  return <h2>Welcome, {props.name}!</h2>;
}

function App() {
  return (
    <div>
      <h1>Engineering College React Demo</h1>
      <Welcome name="Aida" />
      <Welcome name="Nurlan" />
      <Welcome name="Dastan" />
    </div>
  );
}

export default App
