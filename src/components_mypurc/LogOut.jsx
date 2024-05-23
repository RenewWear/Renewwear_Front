import React from "react";
import styles from "./LogOut.module.css";

const LogOut = () => {
  const handleClick = () => {
    alert("로그아웃합니다."); // 클릭 시 알람 표시
  };
  return <div className={styles.div} onClick={handleClick}>로그아웃</div>;
};

export default LogOut;
