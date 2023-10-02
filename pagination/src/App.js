import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

function App() {
  const postsPerPage = 10;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const res = await axios.get(url);
        setLoading(false);
        console.log(res.data)
        setPosts(res.data);
      } catch (error) {
        console.log("there is a error: ", error);
      }
    };
    fetchPosts();
  }, []);

const indexOfLastPost = currentPage*postsPerPage;
const indexOfFistPost = indexOfLastPost-postsPerPage;
const currentPagePosts = posts.slice(indexOfFistPost,indexOfLastPost);
const numOfPages = Math.ceil(posts.length/postsPerPage)

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <Posts currentPagePosts={currentPagePosts}/>
      <Pagination 
      numOfPages = {numOfPages}
      onPageNumberClick = {setCurrentPage}
      />
    </div>
  );
}

export default App;
