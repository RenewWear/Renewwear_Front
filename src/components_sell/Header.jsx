import "./Header.css";

const Header = () => {

  const logoClick = () => {
    alert('메인페이지 이동');
  };

  const logoutClick = () => {
    alert('로그인 페이지 이동');
  };

  const sellClick = () => {
    alert('판매 글 등록 페이지 이동');
  };

  const mypageClick = () => {
    alert('마이페이지 이동');
  };

  const favoriteClick = () => {
    alert('찜한 목록 이동');
  };

  const chatClick = () => {
    alert('채팅페이지 이동');
  };

  return (
    <header className="feature-extractor">
      <div className="headbg" />
      <div className="renew-wear-wrapper">
        <h2 className="renew-wear" onClick={logoClick}>Renew Wear</h2>
      </div>
      <div className="wrapper">
        <div className="sell" onClick={sellClick}>판매하기</div>
      </div>
      <div className="user-wrapper" onClick={mypageClick}>
        <img className="user-icon" loading="lazy" alt="" src="/user.svg" />
      </div>
      <div className="account-wrapper">
        <div className="account" onClick={mypageClick}>마이페이지</div>
      </div>
      <div className="feature-extractor-inner" onClick={favoriteClick}>
        <div className="shoping-parent">
          <div className="shoping" />
          <img
            className="favorite-icon"
            loading="lazy"
            alt=""
            src="/favorite.svg"
          />
        </div>
      </div>
      <div className="container" onClick={favoriteClick}>
        <div className="div2">{`찜한 목록 `}</div>
      </div>
      <div className="data-aggregator" onClick={chatClick}>
        <img
          className="chat-alt-2-light-icon"
          loading="lazy"
          alt=""
          src="/chat-alt-2-light.svg"
        />
      </div>
      <div className="feature-extractor-child">
        <div className="parent">
          <div className="div3" onClick={chatClick}>채팅</div>
          <div className="frame">
            <div className="logout" onClick={logoutClick}>로그아웃</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
