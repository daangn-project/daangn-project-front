import { useState } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { fetchPostByJson } from "../../common/fetch";

const Login = () => {
  const URL = "http://localhost:8080/auth/login";
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleIdInput = (e) => {
    setId(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };
  const handleLoginClick = (e) => {
    e.preventDefault();
    fetchPostByJson(URL, { username: id, password: password })
      .then((response) => response.json())
      .then((result) => {
        if (result.token) {
          let decode = jwt_decode(result.token);
          alert("로그인에 성공했습니다.");
          localStorage.setItem("JWTtoken", result.token);
          navigate("/");
        } else {
          alert("아이디나 비밀번호를 확인해주세요.");
          window.location.reload();
        }
      });
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-header">
          <Link to="/">
            <img
              className="fixed-logo"
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/logo-basic-24b18257ac4ef693c02233bf21e9cb7ecbf43ebd8d5b40c24d99e14094a44c81.svg"
              alt="당근마켓"
            ></img>
          </Link>
        </div>

        <form name="loginform" className="login-form">
          <input
            type="text"
            name="id"
            className="n-input"
            title="아이디"
            value={id}
            placeholder="아이디를 입력해주세요."
            onChange={handleIdInput}
          />
          <input
            type="password"
            name="pw"
            className="n-input"
            title="비밀번호"
            value={password}
            placeholder="비밀번호를 입력해주세요."
            onChange={handlePasswordInput}
          />
          <button onClick={handleLoginClick} className="n-btn">
            로그인
          </button>

          <div className="login-option">
            <div className="login-util">
              <Link to="/signup" id="id-search">
                회원이 아니신가요? 회원가입하기
              </Link>
              <span></span>
              <Link to="#" id="id-search">
                아이디 찾기
              </Link>
              <span></span>
              <Link to="#" id="pw-search">
                비밀번호 찾기
              </Link>
            </div>
          </div>
          <div className="social-login"></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
