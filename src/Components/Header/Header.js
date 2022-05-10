import { Link } from '@mui/material';
import React from 'react'
import "./Header.css";

function Header() {
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

        <Link href="/login" underline="hover" >
          Sign In
        </Link>
        {/* <Route exact path='/signIn' component={SignIn}/> */}
      </section>        
    </div>
  )
}

export default Header;