import './App.css';
import styles from './App.module.css';
import ButtonsContainer from './components/ButtonsContainer';
import Display from './components/Display';
import {useState} from 'react';

function App() {
  const [calVal,setCalVal]=useState("")
  const onButtonClick=(buttonText)=>{
    if(buttonText === "C"){
       setCalVal(" ");
    }
    else if(buttonText==='='){
        const result=eval(calVal)
        setCalVal(result)
    }
    else{
      let newDisplay=calVal+buttonText
      setCalVal(newDisplay)
    }
  }

return (
  <div className={styles.calculator}>
    <Display displayValue={calVal} />
    <ButtonsContainer onButtonClick={onButtonClick} />
  </div>
);
}

export default App;
