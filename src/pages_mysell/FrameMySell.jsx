import SaleHistory from "../components_mysell/SaleHistory";
import PurchaseHistory from "../components_mysell/PurchaseHistory";
import Favorites from "../components_mysell/Favorites";
import WithDraw from "../components_mysell/WithDraw";
import Post from "../components_mysell/Post";
import ToMainPage from "../components_mysell/ToMainPage";
import MyPage from "../components_mysell/MyPage";
import Save from "../components_mysell/Save";
import LogOut from "../components_mysell/LogOut";
import Chat from "../components_mysell/Chat";
import Sell from "../components_mysell/Sell";
import styles from "./FrameMySell.module.css";

const FrameMySell = () => {
  return (
    <div className={styles.div}>
      <div className={styles.child} />
      <div className={styles.item} />
      <SaleHistory />
      <PurchaseHistory />
      <Favorites />
      <img className={styles.icon} alt="" src="/@2x.png" />
      <div className={styles.aaaa}>
        <span className={styles.aaaa1}>aaaa</span>
        <span>{`님 `}</span>
      </div>
      {/*<div className={styles.div1}>판매 내역</div>
      <div className={styles.div2}>판매 내역</div>
      <div className={styles.div3}>구매 내역</div>
  <div className={styles.div4}>관심 목록</div>*/}
      <div className={styles.myPage}>My Page</div>
      <div className={styles.div5}>
        <WithDraw />
        <div className={styles.div6}>회원 탈퇴</div>
      </div>
      <div className={styles.div7}>판매 내역</div>
      <div className={styles.inner} />
      <div className={styles.lineDiv} />
      <div className={styles.div8}>정보</div>

      {/* <Post /> 추가될 때마다 판매 항목 증가 구현 */}
      {/* Post.jsx에 함수 구현. 현재 삭제 함수는 구현 완료 */}
      <Post />
      <Post />
      <Post />
      
      <Post />
      <div className={styles.top}>
        <ToMainPage />
      </div>
      <div className={styles.shopaccount}>
        <div className={styles.account}>
          <img className={styles.userIcon} alt="" src="/user.svg" />
          <MyPage />
        </div>
        <div className={styles.shopping}>
          <img className={styles.bagAltIcon} alt="" src="/bag-alt.svg" />
          <div className={styles.shoping} />
        </div>
      </div>
      <div className={styles.favorite}>
        <img className={styles.favoriteChild} alt="" src="/vector-15.svg" />
        <div className={styles.div11}>{`찜한 목록 `}</div>
      </div>
      <Save />
      <div className={styles.div12}>
        <LogOut />
      </div>
      <div className={styles.div13}>
        <img
          className={styles.chatAlt2LightIcon}
          alt=""
          src="/chat-alt-2-light.svg"
        />
        <Chat />
      </div>
      <div className={styles.div14}>
        <Sell />
      </div>
    </div>
  );
};

export default FrameMySell;
