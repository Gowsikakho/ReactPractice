import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Head from './Head.jsx';
import Main from './MainContent.jsx';
import Footer from './Footer.jsx';

function Task1(){
    return (
      <>
      <Head />
      <Main />
      <Footer />
    </>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Task1 />
  </StrictMode>,

)
