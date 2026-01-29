import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  function showModalHandler() {
    setIsModalOpen(true);
  }

  function closeModalHandler() {
    setIsModalOpen(false);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList isVisible={isModalOpen} onStopPosting={closeModalHandler} />
      </main>
    </>
  );
}
export default App;
