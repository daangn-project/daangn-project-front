import { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    const URL = "http://localhost:8080/users/login";
    
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleIdInput = (e) => {setId(e.target.value);}
    const handlePasswordInput = (e) => {setPassword(e.target.value);}
    const handleLoginClick = (e) => {
        e.preventDefault();
        fetch(URL, {
            method: "POST",
            body: JSON.stringify({
                username : id,
                password : password 
            })
        })
        .then((response) => response.json())
        .then((result) => {
            console.log("response", result);
        })
    }

    return (
        <div className='login-wrapper'>
            <div className='login-container'>
                <div className='login-header'>
                    <Link to="/">
                    <img className="fixed-logo" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/logo-basic-24b18257ac4ef693c02233bf21e9cb7ecbf43ebd8d5b40c24d99e14094a44c81.svg" alt="당근마켓"></img></Link>
                </div>

                <form name="loginform" className='login-form'>
                    <input type="text" name="id" className='n-input' title="아이디" value = {id} placeholder="아이디를 입력해주세요." onChange={handleIdInput}/>
                    <input type="password" name="pw" className='n-input' title="비밀번호" value={password} placeholder="비밀번호를 입력해주세요." onChange={handlePasswordInput}/>
                    <button onClick={handleLoginClick} className='n-btn'>로그인</button>

                    <div className='login-option'>
                        <div className='login-util'>
                            <Link to="#" id="id-search">아이디 찾기</Link>
                            <span></span>
                            <Link to="#" id="pw-search">비밀번호 찾기</Link>
                            <span></span>
                            <Link to="/signup" id="pw-search">회원가입</Link>
                        </div>
                    </div>
                    <div className='social-login'>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Login;
