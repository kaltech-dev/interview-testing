import React, { useEffect, useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('http://localhost:3001/posts');
      const data = await response.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {
            posts.map(post => (
          <div>
          <li key={post.id}>{post.title}</li>
          </div>
        ))
        }
      </ul>
    </div>
  );
}

export default Posts;