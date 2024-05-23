import "./ProductCardMain.css";

const ProductCardMain = () => {

  const imgClick = () => {
    alert('해당 판매 글 페이지 이동');
  };

  return (
    <div className="mainCard">
      <div className="mainImageWrapper">
        <img className="mainImage" loading="lazy" alt="" src="/image@2x.png" onClick={imgClick} />
      </div>
      <div className="mainCardTitle">뉴발 996 팝니다 @@@</div>
      <div className="mainCardCategory">신발 , 운동화</div>
      <div className="mainCardPrice">117000</div>
      <div className="mainCardState">새 상품</div>
      <div className="mainCardBrand">New Balance</div>
    </div>
  );
};

export default ProductCardMain;
