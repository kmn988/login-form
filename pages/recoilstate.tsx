import { atom, selector } from "recoil";

const loginState = atom({
  key: "loginState",
  default: false,
});
const countValue = atom({
  key: "countValue",
  default: 0,
})

export {loginState, countValue}