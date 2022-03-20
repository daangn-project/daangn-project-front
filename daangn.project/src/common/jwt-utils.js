import jwt_decode from "jwt-decode";


export const getUserInfo = () => {
    const token = localStorage.getItem('JWTtoken');
    if (!token){
        return false;
    }else{
        let decode = jwt_decode(token)
    return decode.sub;
    }
}
