import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Single from './pages/Single';

import BlogPostForm from './pages/write';
import Posts from './Posts/Post';
import PostDetails from './Posts/PostDetails';
 

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="settings" element={<Settings />} />
        <Route path="write" element={<BlogPostForm />} />
        <Route path="single" element={<Single />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
