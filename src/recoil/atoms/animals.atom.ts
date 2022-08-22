import { atom } from "recoil";
import { animalsData } from "../../data";

const animals = atom({
  key: "animals",
  default: animalsData,
});

export default animals;
