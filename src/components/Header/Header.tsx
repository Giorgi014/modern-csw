import { useState } from "react";
import "./Header.scss";
import { Button } from "../Route/Route";

const Header = () => {
  const [active, setIsActive] = useState<string>("home");
  return (
    <header>
      <h1 className="knft">KNFT.</h1>
      <nav className="navigation">
        <ul>
          <li
            className={`home ${active === "home" ? "active" : ""}`}
            onClick={() => setIsActive("home")}
          >
            Home
          </li>
          <li
            className={`ntfs ${active === "ntfs" ? "active" : ""}`}
            onClick={() => setIsActive("ntfs")}
          >
            All NFTs
          </li>
          <li
            className={`team ${active === "team" ? "active" : ""}`}
            onClick={() => setIsActive("team")}
          >
            Team
          </li>
          <li
            className={`team_and_co ${
              active === "team_and_co" ? "active" : ""
            }`}
            onClick={() => setIsActive("team_and_co")}
          >
            Team & Co.
          </li>
          <li
            className={`contact ${active === "contact" ? "active" : ""}`}
            onClick={() => setIsActive("contact")}
          >
            Contact
          </li>
        </ul>
      </nav>

      <Button variant="outlined" onClick={() => {
        console.log('inn')
      }}>
        Get in Touch
      </Button>
    </header>
  );
};

export default Header;
