import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserInfo } from '../../common/jwt-utils';

const Mypage = () => {
   const user = getUserInfo();
    return (
        <div className='login-wrapper'>
            <div className='login-container'>
                <div className='login-header'>
                    <Link to="/">
                    <img className="fixed-logo" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/logo-basic-24b18257ac4ef693c02233bf21e9cb7ecbf43ebd8d5b40c24d99e14094a44c81.svg" alt="당근마켓"></img></Link>
                </div>
                <div className='mypage-title'>
                <span>{user}님의 마이페이지 입니다.</span>
                </div>
            </div>
        </div>

    )
}

export default Mypage;
