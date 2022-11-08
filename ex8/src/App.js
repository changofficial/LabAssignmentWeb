import logo from './logo.svg';
import './App.css';
import MySelect from './MySelect';
import MyTextInput from './MyTextInput';
import FormGroup from "@mui/material/FormGroup"

function App() {
  return (
    <FormGroup style={{width: 200, margin: 10}}>
      <MyTextInput/>
      <MySelect/>
    </FormGroup>
  );
}

export default App;
