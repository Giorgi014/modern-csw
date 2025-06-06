import { Button, Overview } from "../../../Route/Route";
import "./CacContainer.scss";

const CacContainer = () => {
  return (
    <article className="create_cell_container">
      <section className="create_cell_explore">
        <h2 className="create_and_sell">
          Buy, Create & <br /> Sell <span>Unique NTFs</span> File.
        </h2>
        <p className="info_txt">
          NFTs are used for digital art and collectibles, GameFi projects,
          metaverses, and more.
        </p>
        <div className="btn">
          <Button variant="contained">Explore NTFs</Button>
        </div>
        <div className="overview">
          <Overview />
        </div>
      </section>
    </article>
  );
};

export default CacContainer;
