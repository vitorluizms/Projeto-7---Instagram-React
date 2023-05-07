import Navbar from "./Navbar";
import Stories from "./Stories.js";
import Posts from "./Posts.js";
import Sidebar from "./Sidebar.js";
import React from "react";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="corpo">
        <div className="esquerdo">
          <Stories />
          <Posts />
        </div>
        <Sidebar />
      </div>
    </React.Fragment>
  );
}
