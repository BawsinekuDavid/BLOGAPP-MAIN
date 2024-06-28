import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import "./posts.css";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxP81ZliCSwZw_MzJ0gO3f9mogTbkXuMw",
  authDomain: "blog-81fe0.firebaseapp.com",
  projectId: "blog-81fe0",
  storageBucket: "blog-81fe0.appspot.com",
  messagingSenderId: "169159634735",
  appId: "1:169159634735:web:99f44d851365170db4fbda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Array<{ id: string, imageUrl: string, title: string }>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, 'posts'));
      const postsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as { id: string, imageUrl: string, title: string }));
      setPosts(postsData);
    };
    fetchPosts();
  }, []);

  const handlePostClick = (id: string) => {
    navigate(`/posts/${id}`);
  };

  return (
    <div className="posts">
      {posts.map(post => (
        <div key={post.id} className="post" style={{ backgroundImage: `url(${post.imageUrl})` }} onClick={() => handlePostClick(post.id)}>
          <div className="post-title">
            <h3>{post.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
