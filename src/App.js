import { useEffect, useState } from 'react';
import './App.css';
import Card from './component/Card';

function App() {

  const [advice , setAdvice] = useState();
  const [id , setId] = useState();
  const dataShow = <Card advice = {advice}  id = {id}/>
  useEffect(()=>{
    fetch ("https://api.adviceslip.com/advice").then((res)=>res.json())
    .then((advice) => setAdvice(advice.slip.advice))
  },[])
  useEffect(()=>{
    fetch ("https://api.adviceslip.com/advice").then((res)=>res.json())
    .then((id) => setId(id.slip.id))
  },[])
  return (<div>
    {dataShow}
  </div>);
}

export default App;
