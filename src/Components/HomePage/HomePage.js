import React, { useState, useEffect } from "react";
import Post from '../Post/Post';
import {db} from '../../Firebase/firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

function HomePage() {
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


  {/** Create separate file for posts 
    https://www.bezkoder.com/react-firebase-hooks-crud/
  */}
  useEffect(() => {
    getCities();
  }, []);
  
  return (
    <div>
      {/** Posts */}
      {
        postObj && postObj.posts && postObj.posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} ></Post>
        ))
      }
    </div>
  )
}


export default HomePage
