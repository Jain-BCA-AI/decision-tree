import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { AnimalCard } from "../../components";
import { AnimalsAtom } from "../../recoil";
import styles from "./home.module.css";
const Home = () => {
  const animals = useRecoilValue(AnimalsAtom);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Choose an animal</h1>
      <h4 className={styles.subtitle}>Shh! Don't tell it to anybody</h4>
      <div className={styles.cardsContainer}>
        {animals.map((animal, index) => (
          <AnimalCard animal={animal} index={index} key={animal.name} />
        ))}
      </div>
      <button
        className={styles.nextPageButton}
        onClick={() => navigate("/filter")}
      >
        Let's start guessing
      </button>
    </div>
  );
};

export default Home;
