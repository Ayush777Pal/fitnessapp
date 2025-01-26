import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'//stack component manages the layout of immediate childeren along with vertical and horizontal access 
import Logo from '../assets/images/Logo.png';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDYYIQHhadrYt1Al5MGZGUUAPYKlLimjY",
  authDomain: "fitness-6b628.firebaseapp.com",
  projectId: "fitness-6b628",
  storageBucket: "fitness-6b628.firebasestorage.app",
  messagingSenderId: "66048963800",
  appId: "1:66048963800:web:1ca7c16e878cc37582d3ad",
  measurementId: "G-VVJPG82D7H"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

const Navabar = () => {
  const [user, setUser] = useState('');
  const googleoutHandler=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      setUser('');
    }).catch((error) => {
      // An error happened.
    });
  }
 const googleHandler=()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    setUser(user);
    console.log(user.displayName)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorCode,credential);
    // ...
  });
  }
  return (
    //Stack compoent is best part of material ui that makes all its inside component in form of stack
    //it also provide responsive design to the webpage
    //where sm stands for for small devices and xs stands for extra small devices px stands for padding x-axis 
    <Stack direction="row" justifyContent="space-around" sx={{gap:{sm: '100px', xs:'35px'},mt:{sm:'32px', xs:'20px'},justifyContent:'none'}} px="15px">
      <Link to="/">
      <img src={Logo} alt='logo' style={{width:'48px', height:'48px', margin:'0 15px'}}/>
      </Link>
      <Stack direction="row" sx={{gap:{lg:"40px", xs:"20px"},fontSize:{lg:"26px",sm:'24px',xs:'18px'}}} alignItems="flex-end">
        {/*for external link we use Link tag */}
        <Link to="/" style={{textDecoration:'none',color:'#3A1212',borderBottom:'3px solid #FF2625'}}>Home</Link>
        {/*for internal link we use anchor tag */}
        <a href='#exercises' style={{textDecoration:'none', color:'#3A1212'}}>Exercise</a>
        {user?(<>
          <div style={{textDecoration:'none', color:'#3A1212'}}>{user.displayName}</div>
          <div style={{textDecoration:'none', color:'#3A1212'}} onClick={googleoutHandler}>SignOut</div>
          </>):<div style={{textDecoration:'none', color:'#3A1212'}} onClick={googleHandler}>SignIn</div>}
        
      </Stack>
    </Stack>

    )
}

export default Navabar