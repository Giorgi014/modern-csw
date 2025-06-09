import CacContainer from "./CreatAndCell/CacContainer";
import "./Home.scss";
import { MsNTFS } from "../../Route/Route";

const Home = () => {
  return (
    <div className="home">
      <CacContainer />
      <MsNTFS />
    </div>
  );
};

export default Home;
