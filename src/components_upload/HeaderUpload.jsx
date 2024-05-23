import "bootstrap/dist/css/bootstrap.min.css";
import "./HeaderUpload.css";
 
const showAlert_chat = () => {
  alert('채팅페이지 이동');
}

const showAlert_favorite = () => {
  alert("찜페이지 이동");
}

const showAlert_logout = () => {
  alert('로그인 페이지 이동');
}

const showAlert_logo = () => {
  alert('메인페이지 이동');
}

const showAlert_mypage = () => {
  alert('마이페이지 이동');
}

const showAlert_sell = () => {
  alert('판매 글 등록 페이지 이동');
}


const HeaderUpload = () => {

  return (
    <div className="uploadHeaderWrapper">
      <div className="uploadHeaderParent">
        <div className="uploadHeaderChild">
          <div className="uploadIDK" />
          <div className="uploadHeaderGrandC">
            
          
          </div>
        </div>
      </div>
      <h1 className="uploadLogo" onClick={showAlert_logo}>Renew Wear</h1>

      <div className='uploadChat' onClick={showAlert_chat}>
        <div className="uploadChatText">채팅</div>
        <img
          className="uploadChatIcon"
          loading="lazy"
          alt=""
          src="/chat-alt-2-light.svg"
      />
      </div>
      <div className="uploadMypage" onClick={showAlert_mypage}>
        <img
          className="uploadMypageIcon"
          loading="lazy"
          alt=""
          src="/user.svg"
        />
        <b className="uploadMyPageText">마이페이지</b>

      </div>
      <div className="uploadFavorite" onClick={showAlert_favorite}>
        <div className="uploadFavoriteText">{`찜한 목록 `}</div>
        <img
          className="uploadFavoriteIcon"
          loading="lazy"
          alt=""
          src="/favorite.svg"
        />
      </div>
      <div className="uploadLogout" onClick={showAlert_logout}>로그아웃</div>
      <div className="uploadSell" onClick={showAlert_sell}>판매하기</div>
    </div>

  );
};

export default HeaderUpload;

