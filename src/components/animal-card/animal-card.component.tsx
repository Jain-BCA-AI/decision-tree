import { useState } from "react";
import { animated, useSpring } from "react-spring";
import { Animal } from "../../models";
import styles from "./animal-card.module.css";
const AnimalCard = (props: { animal: Animal; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  const animalNameStyle = useSpring({
    transform: isHovered ? "translateY(0px)" : "translateY(100px)",
    opacity: isHovered ? 1 : 0,
  });
  const animalImageStyle = useSpring({
    opacity: isHovered ? 0.5 : 1,
  });
  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <animated.img
        src={props.animal.imageUrl}
        alt={props.animal.name}
        className={styles.animalImage}
        style={animalImageStyle}
      />
      <animated.p className={styles.animalName} style={animalNameStyle}>
        {props.animal.name}
      </animated.p>
    </div>
  );
};

export default AnimalCard;
