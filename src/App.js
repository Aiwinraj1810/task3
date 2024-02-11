import { useRef, useState } from 'react';
import './pages/Race.css';

//image imports
import logoReact from './Assets/logo192.png'
import redReact from './Assets/react-red.png'
import phpLogo from './Assets/php-logo.png'
import phpRed from './Assets/php-red.png'
import logoHTML from './Assets/html-logo.png'
import logoCSS from './Assets/css-logo.png'
import logoJS from './Assets/js-logo.png'
 

function App() {
  {/*Assigning movement for each imagge*/}
 const [move, setMove] = useState(false)
 const [move1, setMove1] = useState(false)
 const [move2, setMove2] = useState(false)
 const [move3, setMove3] = useState(false)
 const [move4, setMove4] = useState(false)
  {/*For the changed image*/}
 const img1Ref = useRef(null);
 const img2Ref = useRef(null);
 const img3Ref = useRef(null);
 const img4Ref = useRef(null);



{/*For moving every image*/}
 const [image, setImage] = useState(false)


{/*Click event for move button*/}

 const handleOnClick = ()=>{
  setImage(false)
  setMove(true)
  setMove1(true)
  setMove2(true)
  setMove3(true)
  setMove4(true)

  {/*image change section with delay*/}

  setTimeout(() => {
    img1Ref.current.src = redReact; // Change image after a delay
  }, 2000);
  setTimeout(() => {
    img2Ref.current.src = phpRed; // Change image after a delay
  }, 2000);
  setTimeout(() => {
    img3Ref.current.src = logoJS; // Change image after a delay
  }, 2000);
  setTimeout(() => {
    img4Ref.current.src = logoCSS; // Change image after a delay
  }, 2000);


}
  {/*individual image change section*/}
const handleImage1 =()=>{
  setMove1(true);
  setTimeout(() => {
    img1Ref.current.src = redReact; // Change image after a delay
  }, 2000);
 }
const handleImage2 =()=>{
  setMove2(true);
  setTimeout(() => {
    img2Ref.current.src = phpRed; // Change image after a delay
  }, 2000);
 }
const handleImage3 =()=>{
  setMove3(true);
  setTimeout(() => {
    img3Ref.current.src = logoJS; // Change image after a delay
  }, 2000);
 }
const handleImage4 =()=>{
  setMove4(true);
  setTimeout(() => {
    img4Ref.current.src = logoCSS; // Change image after a delay
  }, 2000);
 }

  {/*Reset button*/}
 const handleReset = () =>{
  setMove(false)
  setMove1(false)
  setMove2(false)
  setMove3(false)
  setMove4(false)
  setImage(false)
 }

 

  return (
    <>
    <div className='wrapper'>
   <h1>Programming race</h1>
    <div className={`container`}>

  {/*Header*/}
      <div className='header'>
        <div>Start</div>
      <div style={{fontSize:"12px", color:"red"}}>
        kindly reload the page if not reset
      </div>
        <div>Finish</div>
      </div>

      {/*First image */}


      <div className='react-logo'>

      <div className={`${image ? 'image' : 'img-1'}  ${move1 ?  'move1' : 'move'}`} >
        <img ref={img1Ref} 
        src={logoReact} 
        alt='react'
         />
         <button  className='reactBtn' onClick={handleImage1} >start</button>
      </div>
      </div>

      {/*Second image */}

      <div className='react-logo'>
      <div className={`${image ? 'image' : 'img-2'}  ${move2 ? 'move2' : 'move'}`} >
        <img ref={img2Ref} src={phpLogo} alt='react' />
      </div>
        
        <button className='reactBtn' onClick={handleImage2} >start</button>
        
      </div>

      {/*Third image */}

      <div className='react-logo'>

      <div className={`${image ? 'image' : 'img-3'}  ${move3 ? 'move3' : 'move'}`} >
        <img ref={img3Ref} src={logoHTML} alt='react' />
      </div>
        
        <button className='reactBtn' onClick={handleImage3} >start</button>
      </div>

      {/*Fourth image */}
      <div className='react-logo'>

      <div className={`${image ? 'image' : 'img-4'}  ${move4 ? 'move4' : 'move'}`} >
        <img ref={img4Ref} src={logoJS} alt='react' />
      </div>
        
        <button className='reactBtn' onClick={handleImage4} >start</button>
      </div>
    </div>


    <div className='button-space'>
        
    <button onClick={handleOnClick} disabled={move}>Move</button>
    <button onClick={handleReset} >Reset</button>
        </div>
    


    </div>
    </>
  );
}

export default App;
