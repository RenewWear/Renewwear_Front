import React from "react";

import styles from "./PurchaseHistory.module.css";

const PurchaseHistory = () => {
  const handleClick = () => {
    alert("구매 내역 페이지로 이동합니다."); // 클릭 시 알람 표시
  };

  return (
    <div className={styles.child} onClick={handleClick}>
    구매내역
    </div>
  );
};

export default PurchaseHistory;
