import React from "react";
import styles from "./ToMainPage.module.css";

const ToMainPage = () => {
  const handleClick = () => {
    alert("메인페이지로 이동합니다."); // 클릭 시 알람 표시
  };
  return <div className={styles.ooMarket} onClick={handleClick}>Renew Wear</div>;
};

export default ToMainPage;
