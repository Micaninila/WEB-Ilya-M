function App() {
  const animalsInHTML = [
    <li>Horse</li>,
    <li>Turtle</li>,
    <li>Elephant</li>,
    <li>Monkey</li>
  ];
  const App = () => {
      return (
        <ul>
          {animalsInHTML}
        </ul>
      );
  };

  return (
    <App />
  );
}

export default App;
