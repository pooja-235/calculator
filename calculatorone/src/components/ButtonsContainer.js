import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  let buttonNumbers = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNumbers.map((buttonNumber) => (
        <button
          className={styles.buttons}
          onClick={() => onButtonClick(buttonNumber)}
        >
          {buttonNumber}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
