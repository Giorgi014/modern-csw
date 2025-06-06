import { Eye } from "../../../Route/Route";
import Counter from "./Counter";
import "./Overview.scss";

const Overview = () => {
  return (
    <section className="overview_container">
      <div className="marketplace_overview">
        <img src={Eye} alt="" className="eye" />
        <h2 className="marketplace_overview_head">
          Nico NFT Marketplace Overview
        </h2>
      </div>
      <div className="marketplace_overview_info">
        <div className="arts">
          <p className="head world_arts">World Arts</p>
          <p className="number art_number">
            <Counter target={30000} />
          </p>
        </div>
        <div className="artists">
          <p className="head digital_artists">Digital Artists</p>
          <p className="number artists_number">
            <Counter target={17000} />
          </p>
        </div>
        <div className="auctions">
          <p className="head live_auctions">Live Auctions</p>
          <p className="number auctions_number">
            <Counter target={22000} />
          </p>
        </div>
        <div className="products">
          <p className="head unique_products">Unique Products</p>
          <p className="number products_number">
            <Counter target={50000} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
