import { Button, Link } from '@mui/material';
import React, {useContext, useEffect, useState} from 'react'
import "./Header.css";
import { AuthContext } from "../../Providers/AuthProvider";
import { ref, onValue } from "firebase/database";
import { auth, db } from '../../Firebase/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Header() {
  const [username, setUsername] = useState("");
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser && currentUser.uid) {
      console.log('currentUser:', currentUser);
      // const starCountRef = ref(db, "users/" + currentUser.uid);
      // onValue(starCountRef, (snapshot) => {
      //   if (snapshot.exists()) {
      //     var data = snapshot.val();
      //     setUsername('Hi ', data.firstName + " " + data.lastName);
      //   }
      // });
    }
  }, [currentUser]);

  const clickLogin = () => {
    if (currentUser) {
      signOut(auth);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className='app__header'>

      <Link href="/">
        <img
          className='app__headerImage'
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram logo"></img>
      </Link>

      {/** Sign in */}
      <section className='header__rightSection'>

        {/* { !currentUser && 
          <Link href="/login" underline="hover" >
            Sign In
          </Link>
        } */}
        {/* <Route exact path='/signIn' component={SignIn}/> */}
        {
          currentUser &&
          <span>Hi <strong>{currentUser.email}</strong></span>
        }
        <Button variant="text" onClick={clickLogin}>
          {currentUser ? "Log Out" : "Login"}
        </Button>
        
      </section>        
    </div>
  )
}

export default Header;