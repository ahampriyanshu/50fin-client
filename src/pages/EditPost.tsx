import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../api';

const Edit = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getPost(id);
        setPost(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, [fetchPost]);



  return (
    <div>
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Edit;
