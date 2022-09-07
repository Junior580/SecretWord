import styles from "./Game.module.scss";

const Game = (props) => {
    return (
        <div className={styles.game}>
            <p className={styles.point}>
                <span>Pontuação: 000</span>
            </p>
            <h1>Advinhe a palavra</h1>
            <h3 className={styles.tio}>
                Dica sobre a palavra: <span>Dica...</span>
            </h3>
            <div className={styles.wordContainer}>
                <span className={styles.letter}>A</span>
                <span className={styles.blackSquare}></span>
            </div>
            <div className={styles.letterContainer}>
                <p>Tente advinhar uma letra da palavra: </p>
                <form action="">
                    <input
                        type="text"
                        name="letter"
                        maxLength={1}
                        required="true"
                    />
                    <button>Jogar!</button>
                </form>
            </div>
            <div className={styles.wrongLettersContainer}>
                <p> Letras já utilizadas: </p>
                <span>a,</span>
                <span>b,</span>
            </div>
        </div>
    );
};
export default Game;
