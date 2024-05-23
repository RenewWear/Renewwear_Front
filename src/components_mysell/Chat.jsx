import React from "react";
import styles from "./Chat.module.css";

const Chat = () => {
  const handleClick = () => {
    alert("채팅 페이지로 이동합니다."); // 클릭 시 알람 표시
  };
  return <div className={styles.div} onClick={handleClick}>채팅</div>;
};

export default Chat;
