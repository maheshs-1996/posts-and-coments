import logo from './logo.svg';
import './App.css';
import { postsData } from "./postsData";
import PostComponent from "./postComponent";

function App() {
  return (
    <div className="App">
      <PostComponent post={postsData} />
    </div>
  );
}

export default App;
