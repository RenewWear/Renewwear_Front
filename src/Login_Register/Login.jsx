import { useState } from "react";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`ID: ${id}, PW: ${password}`);
  };

  return (
    <div className="r-container">
      <span className="title">Renew Wear</span>
      <span className="sub-title">Login</span>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="PW"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
      <p>아이디가 없나요?  회원가입</p>
    </div>
  );
};

export default Login;