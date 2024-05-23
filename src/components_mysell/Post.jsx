import styles from "./Post.module.css";
import { useState } from "react";
const Post = () => {
  const [isDeleted, setIsDeleted] = useState(false); // 삭제 여부 상태

  const handleEditClick = () => {
    alert("게시글 수정 페이지로 이동합니다.");
  };

  const handleDeleteClick = () => {
    const confirmWithdraw = window.confirm("게시글을 삭제하시겠습니까?");
    
    if (confirmWithdraw) {
      setIsDeleted(true); // 삭제 상태로 변경
      alert("게시글이 삭제되었습니다.");
    }
  };

  // isDeleted가 true이면 컴포넌트를 렌더링하지 않음
  return isDeleted ? null : ( 
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.div} onClick={handleEditClick}>수정</div>
      <div className={styles.text}>{` `}</div>
      <div className={styles.groupItem} />  {/*사진넣는곳*/}
      <div className={styles.div1}>{`게시글 제목 `}</div>
      <div className={styles.div2}>12000 원</div>
      <div className={styles.div3} onClick={handleDeleteClick}>삭제</div>
      {/*<div className={styles.div4}>2024년 03월 27일</div>*/}
      <div className={styles.div5}>
        {/*<div className={styles.child} />*/}
        {/*<div className={styles.div6}>판매중</div>*/}
      </div>
    </div>
  );
};

export default Post;
