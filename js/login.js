import validation from "../utils/validation.js";
import { login } from "../api/index.js";
import { getParams } from "../utils/mixins.js";
let d = document;
let oUsername = d.querySelector(".account");
let oPassword = d.querySelector(".password");
let oSubmit = d.querySelector(".submit");
// 表单信息
let formData = {
  username: "",
  password: "",
};
// 账号验证
oUsername.addEventListener("keyup", () => {
  oUsername.isValid = validation(oUsername, "username");
  formData.username = oUsername.value;
});
// 密码验证
oPassword.addEventListener("keyup", () => {
  oPassword.isValid = validation(oPassword, "password");
  formData.password = oPassword.value;
});
// 登录按钮
let replace = getParams("replace");
console.log(replace);
oSubmit.addEventListener("click", () => {
  //   表单验证
  let allValid = true;
  allValid = oUsername.isValid && oPassword.isValid;
  // if (!allValid) {
  //   alert("账号密码格式不正确");
  //   return;
  // }
  login(formData).then(
    (res) => {
      console.log(res);
      if (!res.status) {
        alert(res.msg);
        return;
      }
      if (replace) {
        location.replace(replace);
      } else {
        location.replace("../index.html");
      }
    },
    (e) => {
      throw new Error(e);
    }
  );
});
