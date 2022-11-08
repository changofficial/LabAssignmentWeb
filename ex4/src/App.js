import logo from './logo.svg';
import * as React from "react";
import './App.css';
function fetchUser() {
  return  new Promise((resolve) => {
    setTimeout(() => {
      resolve({id:1, name: "Adam"});
    }, 1000)
  })
}
function App() {
 const [id, setId] = React.useState("loading...");
 const [name, setName] = React.useState("loading...");

 React.useEffect(() => {
  fetchUser().then((user) => {
    setId(user.id);
    setName(user.name);
  })
 })
  return (
    <>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </>
  );
}

export default App;
