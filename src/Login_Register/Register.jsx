import { useState } from "react";

const Register = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`ID: ${id}, Email: ${email}, PW: ${password}`);
  };

  return (
    <div className="r-container">
      <span className="title">Renew Wear</span>
      <span className="sub-title">Register</span>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text" //type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="PW"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Register</button>
      </form>
      <p>아이디가 있나요? Login</p>
    </div>
  );
};

export default Register;