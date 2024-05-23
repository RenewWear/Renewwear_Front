import HeaderUpload from "./HeaderUpload";
import InformationUpperUpload from "./InformationUpperUpload";
import InformationLowerUpload from "./InformationLowerUpload";
import FooterUpload from "../components_upload/FooterUpload";
import "./Upload.css";

const Upload = () => {
  return (
    <div className="uploadPageWrapper">
      <HeaderUpload />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <main className="uploadPage">
        <section className="uploadPageDivided">
          <InformationUpperUpload />
          <InformationLowerUpload />
        </section>
      </main>
      <FooterUpload />
    </div>
  );
};

export default Upload;