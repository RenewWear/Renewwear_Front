import React from "react";
import styles from "./WithDraw.module.css";

const WithDraw = () => {
  const handleWithdraw = () => {
    // 확인 대화 상자를 표시하여 회원 탈퇴 여부를 물어봄
    const confirmWithdraw = window.confirm("회원을 탈퇴하시겠습니까?");
    
    if (confirmWithdraw) {
      // 사용자가 "예"를 선택한 경우
      // 회원 탈퇴 처리를 한다고 가정하고, 회원이 탈퇴되었다는 알림을 표시
      alert("회원이 탈퇴되었습니다.");
    }
  };

  return (
    <div className={styles.child} onClick={handleWithdraw}>
    </div>
  );
};

export default WithDraw;
