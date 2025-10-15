import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello.jsx';
import Message from './components/Message.jsx';
import Counter from './components/Counter.jsx';
import Form from './components/Form.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hello name="Gowsi"/> 
      <Message />
      <Form />
    </>
  )
}

export default App
