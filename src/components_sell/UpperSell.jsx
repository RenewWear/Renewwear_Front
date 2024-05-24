import "./UpperSell.css";

const UpperSell = () => {
  return (
    <div className="frame-container">
      <div className="frame-div">
        <div className="wrapper1">
          <img className="product-image" src="../public/favorite.svg" alt='hi' />
        </div>
        <div className="frame-parent1">
          <div className="mmmm-parent">
            <b className="title">제목</b>
            <div className="wrapper2">
              <b className="b2">
                <span className="price">12000000</span>
                <span className="span">   원</span>
              </b>
            </div>
          </div>
          <div className="error-handler-parent">
            <div className="error-handler" />
            <div className="frame-parent2">
              <div className="group">
                <b className="b3">상품상태</b>
                <div className="data-hub">
                  <b className="b4">브랜드</b>
                </div>
                <div className="wrapper3">
                  <b className="b5">사이즈</b>
                </div>
                <b className="b6">카테고리</b>
              </div>
              <div className="frame-wrapper1">
                <div className="parent1">
                  <b className="state">새 상품</b>
                  <div className="wrapper4">
                    <b className="brand">브랜드명</b>
                  </div>
                  <div className="wrapper5">
                    <b className="size">사이즈</b>
                  </div>
                  <b className="category">1차 - 2차</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperSell;
