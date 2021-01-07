import React, { useEffect, useState } from 'react';
import Post from '../components/Posts/Post';
import Button from '../components/ui/Button';
import postService from '../services/post';
import ModalCreatePost from '../components/ModalCreatePost';

const img = require('../assets/notFound.svg');

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPost = () => postService.getAll().then((data) => setPosts(data));

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <section className="section-grid o-container">
      <div className="flex justify-between">
        <ModalCreatePost fetchPost={fetchPost} />

        <Button icon="fas fa-sync-alt" handlerClick={fetchPost} />
      </div>

      {posts.length > 0 ? (
        posts.map((post) => (
          <Post
            title={post.title}
            username={post.username}
            email={post.email}
            content={post.content}
            images={post.images}
            likes={post.likes}
            id={post.id}
            key={post.id}
            fetchPost={fetchPost}
          />
        ))
      ) : (
        <figure>
          <img src={img.default} alt="No encontrado" />
          <p className="text-center">No hay post. Crea el primero!</p>
        </figure>
      )}
    </section>
  );
};

export default Posts;
