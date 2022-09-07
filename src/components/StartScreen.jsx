import styles from "./StartScreen.module.scss";

const StartScreen = (props) => {
    return (
        <div className={styles.container}>
            <h1>Secret Word</h1>
            <p>Clique no botão abaixo para começar a jogar</p>
            <button onClick={props.startGame}>Começar o jogo</button>
        </div>
    );
};

export default StartScreen;
