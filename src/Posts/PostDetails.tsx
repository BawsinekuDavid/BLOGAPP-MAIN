import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the import path as necessary
import "./posts.css";

interface PostDetailsParams {
  id: string;
}

const PostDetails: React.FC = () => {
  const { id } = useParams<PostDetailsParams>(); // useParams expects PostDetailsParams type
  const [post, setPost] = useState<{ imageUrl: string; title: string; content: string } | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        const docRef = doc(db, 'posts', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPost(docSnap.data() as { imageUrl: string; title: string; content: string });
        }
      }
    };
    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-details">
        <div>
        <img src={post.imageUrl} alt={post.title} className="post-details-image"  style={{height:"550px", width:"1200px", borderRadius:10 }}/>
        </div>
     
      <h1 className="post-details-title">{post.title}</h1>
      <p className="post-details-content">{post.content}</p>
    </div>
  );
};

export default PostDetails;
