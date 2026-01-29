import Post from "./Post";
import NewPost from "./NewPost";
import styles from "./PostsList.module.css";
import Modal from "./Modal";
import { useState } from "react";

function PostsList({ isVisible, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((prevPosts) => [postData, ...prevPosts]);
  }
  let modalHandler = (
    <Modal onClose={onStopPosting}>
      <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
    </Modal>
  );

  return (
    <>
      {isVisible && modalHandler}
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} text={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No Posts Yet!</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
