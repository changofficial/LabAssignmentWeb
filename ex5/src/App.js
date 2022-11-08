import logo from './logo.svg';
import './App.css';
import {FadeLoader} from "react-spinners"
import MyPage from './MyPage';
import React from 'react';

function App() {
  return (
    <React.Suspense fallback={<FadeLoader color={"lightblue"} size={150}/> }>
      <MyPage></MyPage>
    </React.Suspense>
  );
}

export default App;
