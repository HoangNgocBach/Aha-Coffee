/*****************************************************************
* Description:	<Functions pattern Service> 
* Creator:		<QuangVB>
* Created Date:	<>
*****************************************************************/

// Check kí tự đặc biệt
const patternSpecialCharacters = /[!@#$%^&¥€$•*~`√π÷×¶∆£¢°©®™℅()_+\-=\[\]{};':"\\|,.<>\/?]+/;

// Check mật khẩu
const patternPassword = /(?=.*\d)(?=.*[a-z]).{6,}/;

// Check số điện thoại VN
const patternPhone = /((09|03|07|08|05)+([0-9]{8})\b)/g;

// Check email
const patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //cách 1
const patternEmail2 = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;  //Cách 2

// Check mã số thuế
const patternTaxNumber = /^([0-9]{10})+$/; //ma so thue 10 so

// Check số CMT_CCCD
const patternCMT_CCCD = /^([0-9]{9}||[0-9]{12})+$/; //CMT-CCCD 9 hoac 12 so

export default {
    patternSpecialCharacters,
    patternPassword,
    patternPhone,
    patternEmail,
    patternEmail2,
    patternTaxNumber,
    patternCMT_CCCD,
}
