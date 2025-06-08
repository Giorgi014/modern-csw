import { ShockAbsorber, UPhoto } from "../../../Route/Route";
import "./UserPhoto.scss";

const UserPhoto = () => {
  return (
    <section className="user_photo_container">
      {/* <img src={UPhoto} alt="User" className="user_photo" /> */}
      <img src={ShockAbsorber} alt="User" className="user_photo" />
    </section>
  );
};

export default UserPhoto;
