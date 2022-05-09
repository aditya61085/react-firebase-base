import React, { useState, useEffect } from "react";
import './App.css';
import Post from './Components/Post/Post';
import {db} from './Firebase/firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

function App() {

  const [postObj, setPostObj] = useState({
    noOfPost: 0,
    posts: []
  });


  async function getCities() {
    const citiesCol = collection(db, 'posts');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    
    console.log('cityList:', cityList);

    setPostObj({
      noOfPost: cityList.length,
      posts: cityList
    })
  }


  useEffect(() => {
    getCities();
  }, []);
  

  return (
    <div className="App">
      
      {/* Website header */ }
      <div className='app__header'>
        <img
          className='app__headerImage'
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram logo"></img>
      </div>

      {/** Posts */}
      {
        postObj && postObj.posts && postObj.posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} ></Post>
        ))
      }

    </div>
  );
}

export default App;
