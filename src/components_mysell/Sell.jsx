import React from "react";
import styles from "./Sell.module.css";

const Sell = () => {
  const handleClick = () => {
    alert("판매하기 페이지로 이동합니다."); // 클릭 시 알람 표시
  };

  return (
    <div className={styles.child} onClick={handleClick}>판매하기
    </div>
  );
};

export default Sell;
