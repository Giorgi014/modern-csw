import { useState } from "react";
import "./MsHead.scss";

const MsHead = () => {
  const [active, setIsActive] = useState<string>("all");
  return (
    <header className="ms_header_container">
      <h2 className="ms_popular_head">
        <span>Most Popular</span> NFTs
      </h2>
      <nav className="ms_navigation">
        <ul>
          <li
            className={`all ${active === "all" ? "active" : ""}`}
            onClick={() => setIsActive("all")}
          >
            All
          </li>
          <li
            className={`hape_prime ${active === "hape_prime" ? "active" : ""}`}
            onClick={() => setIsActive("hape_prime")}
          >
            Hape Prime
          </li>
          <li
            className={`lazy_Lions ${active === "lazy_Lions" ? "active" : ""}`}
            onClick={() => setIsActive("lazy_Lions")}
          >
            Lazy Lions
          </li>
          <li
            className={`peaceful_ape ${
              active === "peaceful_ape" ? "active" : ""
            }`}
            onClick={() => setIsActive("peaceful_ape")}
          >
            Peaceful Ape
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MsHead;
