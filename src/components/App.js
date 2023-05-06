import Navbar from "./Navbar";
import Stories from "./Stories.js";
import Posts from "./Posts.js";

export default function App() {
  return (
    <div>
      <Navbar />
      <div class="corpo">
        <div class="esquerdo">
          <Stories />
          <Posts />
        </div>
      </div>
    </div>
  );
}
