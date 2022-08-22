import {
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
  useResetRecoilState,
} from "recoil";
import { AnimalCard, QuestionCard } from "../../components";
import { animalsData, questions as questionsDataset } from "../../data";
import { Animal, AvailableFeatures } from "../../models";
import { AnimalsAtom, QuestionsAtom } from "../../recoil";
import styles from "./filter.module.css";

interface FilterAnimalsProps {
  answer: boolean;
  feature: AvailableFeatures["feature"];
}

const Filter = () => {
  const [animals, setAnimals] = useRecoilState(AnimalsAtom);
  const [questions, setQuestions] = useRecoilState(QuestionsAtom);
  const resetAnimals = useResetRecoilState(AnimalsAtom);
  const resetQuestions = useResetRecoilState(QuestionsAtom);

  const filterAnimals = (props: FilterAnimalsProps): Animal[] => {
    const filteredAnimals = animals.filter((animal) => {
      return animal.features[props.feature] === props.answer;
    });

    return filteredAnimals;
  };

  const handleAnswerSelect = (
    question: string,
    answer: boolean,
    feature: AvailableFeatures["feature"]
  ) => {
    const newAnimals = filterAnimals({ answer: answer, feature: feature });
    const newQuestions = questions.map((q) => {
      if (q.question === question) {
        return { ...q, answer: answer };
      }
      return q;
    });
    setQuestions(newQuestions);
    setAnimals(newAnimals);
  };

  return (
    <div className={styles.container}>
      <div className={styles.animalsContainer}>
        <div className={styles.animalsMiniCardContainer}>
          {animals.map((animal) => (
            <img
              src={animal.imageUrl}
              alt={animal.name}
              className={styles.animal}
              key={animal.name}
            />
          ))}
        </div>
      </div>
      <div className={styles.questionsContainer}>
        {questionsDataset.map((question) => (
          <QuestionCard
            key={question.question}
            feature={question.feature}
            onAnswerSelect={handleAnswerSelect}
            question={question.question}
          />
        ))}
        <button
          className={styles.resetButton}
          onClick={() => {
            resetAnimals();
            resetQuestions();
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filter;
