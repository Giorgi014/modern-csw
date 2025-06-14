import { Outlet } from "react-router-dom";
import "./App.scss";
import React from "react";

const Header = React.lazy(() => import("./components/Header/Header"));
const Footer = React.lazy(() => import("./components/Footer/Footer"));

function App() {
  return (
    <>
      <div className="sectionHighlight">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
