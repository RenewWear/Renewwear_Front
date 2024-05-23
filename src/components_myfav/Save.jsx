import React from "react";
import styles from "./Save.module.css";

const Save = () => {
  const handleClick = () => {
    alert("찜한 목록 페이지로 이동합니다."); // 클릭 시 알람 표시
  };
  return <div className={styles.div} onClick={handleClick}>{`찜한 목록 `}</div>;
};

export default Save;
