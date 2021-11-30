/*****************************************************************
 * Description:	<Functions Validate Service>
 * Creator:		<QuangVB>
 * Created Date:	<>
 *****************************************************************/

import React from 'react';

export default class ValidateService {
  // Check null
  validateNull = value => {
    if (value === '') {
      return false;
    } else return true;
  };
  // Hàm xóa khoảng trắng 2 đầu chuỗi
  deleteWhitespace = value => {
    return value.trim();
  };
  // Check kí tự đặc biệt
  validateSpecialCharacters = value => {
    let vnf_regex = /[!@#$%^&¥€$•*~`√π÷×¶∆£¢°©®™℅()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (vnf_regex.test(value) == true) {
      return false;
    } else return true;
  };
  // Check tên >= 6 kí tự
  validateName = name => {
    if (name.length < 6) {
      return false;
    } else return true;
  };
  // Check mật khẩu
  validatePassword = password => {
    const passw = /(?=.*\d)(?=.*[a-z]).{6,}/;
    if (passw.test(password) == false) {
      return false;
    } else return true;
  };
  // So sánh mật khẩu, trùng khớp
  validateRePassword = (password, repassword) => {
    if (password !== repassword) {
      return false;
    } else return true;
  };
  // Check số điện thoại
  validatePhone = phone => {
    let vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (vnf_regex.test(phone) == false) {
      return false;
    } else return true;
  };

  validateIdCard = idCard => {
    let vnf_regex = /^([0-9]{9}||[0-9]{12})+$/;
    if (vnf_regex.test(idCard) == false) {
      return false;
    } else return true;
  };
  // Check email
  validateEmail = email => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //cách 1
    // let reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;  //Cách 2
    if (reg.test(email) === false) {
      return false;
    } else return true;
  };
  // Xác thực số điện thoại
  verifyPhone = isVerifyPhone => {
    if (isVerifyPhone == false) {
      return false;
    } else return true;
  };
  // Check mã số thuế
  validateTaxNumber = tax_number => {
    let numbers = /^([0-9]{10})+$/; //ma so thue 10 so
    if (numbers.test(tax_number) == false) {
      return false;
    } else return true;
  };
  // Check số CMT_CCCD
  validateCMT_CCCD_Number = tax_number => {
    let numbers = /^([0-9]{9}||[0-9]{12})+$/; //CMT-CCCD 9 hoac 12 so
    if (numbers.test(tax_number) == false) {
      return false;
    } else return true;
  };
  // Check trên 16 tuổi
  validateDateOfbirth = value => {
    if (value) {
      let dateNow = new Date();
      let datavalue = new Date(value);
      if (dateNow.getFullYear() - datavalue.getFullYear() > 16) return true;
      else return false;
    } else return false;
  };
}

export const validateService = new ValidateService();
