
import React from "react";

import styles from "./SaleHistory.module.css";

const SaleHistory = () => {
  const handleClick = () => {
    alert("판매 내역 페이지로 이동합니다."); // 클릭 시 경고창 표시
  };

  return (
    <div className={styles.child} onClick={handleClick}> 
    판매내역
    </div>
  );
};

export default SaleHistory;
