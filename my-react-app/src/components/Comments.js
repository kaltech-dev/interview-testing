import React, { useEffect, useState } from 'react';

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      const response = await fetch('http://localhost:3001/comments');
      const data = await response.json();
      setComments(data);
    }

    fetchComments();
  }, []);

  return (
    <div>
      <h1>Comments</h1>
      <ul>
        {
            comments.map(comments => (
          <div>
          <li key={comments.id}>{comments.title}</li>
          </div>
        ))
        }
      </ul>
    </div>
  );
}

export default Comments;