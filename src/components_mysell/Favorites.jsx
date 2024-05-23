import React from "react";

import styles from "./Favorites.module.css";

const Favorites = () => {
  const handleClick = () => {
    alert("관심 목록 페이지로 이동합니다."); // 클릭 시 알람 표시
  };

  return (
    <div className={styles.child} onClick={handleClick}>
      관심목록
    </div>
  );
};

export default Favorites;

