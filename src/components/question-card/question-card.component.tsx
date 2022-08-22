import { AvailableFeatures } from "../../models";
import styles from "./question-card.module.css";
import { useRecoilValue } from "recoil";
import { AnimalsAtom, QuestionsAtom } from "../../recoil";
import { CSSProperties } from "react";

interface QuestionCardProps {
  question: string;
  feature: AvailableFeatures["feature"];
  onAnswerSelect: (
    question: string,
    answer: boolean,
    feature: AvailableFeatures["feature"]
  ) => void;
}

const QuestionCard = ({
  question,
  feature,
  onAnswerSelect,
}: QuestionCardProps) => {
  const questions = useRecoilValue(QuestionsAtom);
  const animals = useRecoilValue(AnimalsAtom);

  const selectedButtonStyle: CSSProperties = {
    backgroundColor: "var(--primary-color)",
    color: "white",
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.question}>{question}</h3>
      <div className={styles.answersContainer}>
        <button
          disabled={
            questions.find((q) => q.question === question)?.answer !== null ||
            animals.length <= 1
          }
          style={
            questions.find((q) => q.question === question)?.answer
              ? selectedButtonStyle
              : {}
          }
          className={styles.answerButton}
          onClick={() => onAnswerSelect(question, true, feature)}
        >
          Yes
        </button>
        <button
          disabled={
            questions.find((q) => q.question === question)?.answer !== null ||
            animals.length <= 1
          }
          className={styles.answerButton}
          style={
            questions.find((q) => q.question === question)?.answer === false
              ? selectedButtonStyle
              : {}
          }
          onClick={() => onAnswerSelect(question, false, feature)}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
