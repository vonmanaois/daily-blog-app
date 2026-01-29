import Post from "./Post";
import NewPost from "../routes/NewPost";
import styles from "./PostsList.module.css";
import Modal from "./Modal";
import { useState } from "react";
import { useEffect } from "react";

function PostsList({}) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setIsLoading(false);
    }

    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => {
      setError(error.message);
    });
    setPosts((prevPosts) => [postData, ...prevPosts]);
  }

  return (
    <>
      {!isLoading && posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} text={post.body} />
          ))}
        </ul>
      )}
      {!isLoading && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No Posts Yet!</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isLoading && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading...</p>
        </div>
      )}
      {error && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>{error}</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
