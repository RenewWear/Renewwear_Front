import HeaderMain from "./HeaderMain";
import ProductListMain from "./ProductListMain";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="mainPage">
      <div className="mainChild" />
      <div className="mainItem" />
      <HeaderMain />
      <img className="mainBagAltIcon" alt="" src="/bag-alt.svg" />
      <section className="mainList">
        <ProductListMain />
      </section>
    </div>
  );
};

export default MainPage;
