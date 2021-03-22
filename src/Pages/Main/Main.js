import React from "react";
import MainPageNav from "../../Components/MainNav";
import MainPageFeed from "./mainPageFeed";
// import Cart from "../Cart/Cart";
import "./Main.scss";

class Main extends React.Component {
  render() {
    return (
      <>
        <div className="feedPage">
          <MainPageNav />
          <MainPageFeed />
        </div>
      </>
    );
  }
}

export default Main;
