import Stories from "./Stories.js";
import Posts from "./Posts.js";
import Sidebar from "./Sidebar.js";

export default function Body() {
  return (
    <div className="corpo">
      <div className="esquerdo">
        <Stories />
        <Posts />
      </div>
      <Sidebar />
    </div>
  );
}
