// import { useState } from 'react';
import { Link } from 'react-router-dom';
const SignUp = () => {

    return (
        <div className='login-wrapper'>
            <div className='login-container'>
                <div className='login-header'>
                    <Link to="/">
                    <img className="fixed-logo" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/logo-basic-24b18257ac4ef693c02233bf21e9cb7ecbf43ebd8d5b40c24d99e14094a44c81.svg" alt="당근마켓"></img></Link>
                </div>
                <form>
                    <input placeholder='휴대폰 번호를 입력해주세요'></input>
                    <button className='n-btn'>회원가입</button>
                    <div className='social-login'>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default SignUp;
