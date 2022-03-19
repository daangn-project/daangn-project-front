import { useState } from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
    const URL = "http://localhost:8080/users/signup";
    
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");

    function Checkform() { if( id === "" || password === "" || nickname === "" || email === "" ) { alert("항목을 모두 채워주세요"); return false; } }
    const handleIdInput = (e) => {setId(e.target.value);}
    const handlePasswordInput = (e) => {setPassword(e.target.value);}
    const handleEmailInput = (e) => {setEmail(e.target.value);}
    const handleNicknameInput = (e) => {setNickname(e.target.value);}
    const handleSignupClick = (e) => {
        e.preventDefault();
        fetch(URL, {
            headers:{
                "Content-Type" :"application/json"
            },
            method: "POST",
            body: JSON.stringify({
                username : id,
                password : password,
                nickname: nickname,
                email: email
            })
        })
        Checkform()
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
                    <input type="text" name="pw" className='n-input' title="닉네임" value={nickname} placeholder="닉네임을 입력해주세요." onChange={handleNicknameInput}/>
                    <input type="text" name="pw" className='n-input' title="이메일" value={email} placeholder="이메일을 입력해주세요." onChange={handleEmailInput}/>
                    <input type="password" name="pw" className='n-input' title="비밀번호" value={password} placeholder="비밀번호를 입력해주세요." onChange={handlePasswordInput}/>
                    <button onClick={handleSignupClick} className='n-btn'>회원가입</button>
                    <div className='login-option'>
                        <div className='login-util'>
                        <Link to="/login" id="id-search">이미 회원이신가요? 로그인하기</Link>
                        <span></span>
                            <Link to="#" id="id-search">아이디 찾기</Link>
                            <span></span>
                            <Link to="#" id="pw-search">비밀번호 찾기</Link>
                        </div>
                    </div>
                    <div className='social-login'>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Signup;
