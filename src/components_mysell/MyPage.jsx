import React from "react";
import styles from "./MyPage.module.css";

const MyPage = () => {
  const handleClick = () => {
    alert("마이페이지로 이동합니다."); // 클릭 시 알람 표시
  };
  return <div className={styles.account} onClick={handleClick}>마이페이지</div>;
};

export default MyPage;
