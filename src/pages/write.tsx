import React, { useState, ChangeEvent, FormEvent } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../navbar/navbar';
 

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

interface BlogPost {
  title: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  imageUrl: string;
}

const BlogPostForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [tags, setTags] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = '';
      if (image) {
        const storageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(storageRef, image);
        imageUrl = await getDownloadURL(storageRef);
      }

      const post: BlogPost = {
        title,
        content,
        author,
        category,
        tags: tags.split(',').map(tag => tag.trim()),
        imageUrl
      };

      await addDoc(collection(db, 'posts'), post);
      toast.success('Post added successfully!');
      
      // Clear form fields
      setTitle('');
      setContent('');
      setAuthor('');
      setCategory('');
      setTags('');
      setImage(null);
    } catch (error) {
      if (error instanceof Error) {
        toast.error('Error adding post: ' + error.message);
      } else {
        toast.error('An unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const formStyle: React.CSSProperties = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  };

  const formGroupStyle: React.CSSProperties = {
    marginBottom: '15px'
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold'
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px'
  };

  const textareaStyle: React.CSSProperties = {
    width: '100%',
    padding: '8px',
    height: '150px',
    border: '1px solid #ccc',
    borderRadius: '4px'
  };

  const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer'
  };

  return (
    <>
    <Navbar/>
    <div style={formStyle}>
      <ToastContainer />
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Title</label>
          <input
            type="text"
            style={inputStyle}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Content</label>
          <textarea
            style={textareaStyle}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Author</label>
          <input
            type="text"
            style={inputStyle}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Category</label>
          <input
            type="text"
            style={inputStyle}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Tags (comma separated)</label>
          <input
            type="text"
            style={inputStyle}
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Image</label>
          <input
            type="file"
            style={inputStyle}
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" style={buttonStyle} disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
    </>
  );
};

export default BlogPostForm;
