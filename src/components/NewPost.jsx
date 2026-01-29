import classes from "./NewPost.module.css";
import { useState } from "react";
function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function onAuthorChangeHandler(e) {
    setEnteredAuthor(e.target.value);
  }

  function onBodyChangeHandler(e) {
    setEnteredBody(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={onBodyChangeHandler}
        ></textarea>
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          required
          onChange={onAuthorChangeHandler}
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
