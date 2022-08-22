import { atom } from "recoil";
import { questions as questionsData } from "../../data/questions.data";

const questions = atom({
  key: "questions",
  default: questionsData,
});
export default questions;
