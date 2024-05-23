import FavoriteMain from "./FavoriteMain";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <header className="mainHeadBgWrapper">
      <div className="mainHeadBackground" />
      <div className="mainLogoTextWrapper">
        <h2 className="mainLogoText">Renew Wear</h2>
      </div>
      <div className="mainWrapper">
        <div className="mainSell">판매하기</div>
      </div>
      <div className="mainUserWrapper">
        <img className="mainUserIcon" loading="lazy" alt="" src="/user.svg" />
      </div>
      <div className="mainMypageWrapper">
        <div className="mainMypage">마이페이지</div>
      </div>
      <div className="mainFavoriteWrapper">
        <div className="mainFavorite">
          <FavoriteMain />
          <div className="mainFavorite2" />
        </div>
      </div>
      <div className="mainChatIconWrapper">
        <img
          className="mainChatIcon"
          loading="lazy"
          alt=""
          src="/chat-alt-2-light.svg"
        />
      </div>
      <div className="mainChatWrapper">
        <div className="mainChatParent">
          <div className="mainChat">채팅</div>
          <div className="mainLogoutWrapper">
            <div className="mainLogoutParent">
              <p className="mainLogout">로그아웃</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
