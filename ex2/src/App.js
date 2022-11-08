import logo from './logo.svg';
import './App.css';
import * as React from "react";
import MyComponent from './MyComponent';

function App() {
  const [MyComponent, setMyComponent] = React.useState(() => () => null);
  React.useState(() => {
    import("./MyComponent").then((module)=> {
      setMyComponent(() => module.default);
    });
  }, []);
  return  <MyComponent /> ;
}
export default App;
