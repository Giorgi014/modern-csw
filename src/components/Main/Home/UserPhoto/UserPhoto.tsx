import { ShockAbsorber, UPhoto } from "../../../Route/Route";
import "./UserPhoto.scss";

const UserPhoto = () => {
  return (
    <section className="user_photo_container">
      <div className="user_photo_cont">
        <img src={UPhoto} alt="User" className="user_photo" />
        <div className="user_name_id">
            <p className="user_name">Cyber Samurai #177</p>
        </div>
      </div>
      {/* <img src={ShockAbsorber} alt="User" className="user_photo" /> */}
    </section>
  );
};

export default UserPhoto;
