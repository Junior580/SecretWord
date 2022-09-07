import styles from "./GameOver.module.scss";

const GameOver = (props) => {
    return (
        <div>
            <h1>game</h1>
            <button onClick={props.retry}>Reiniciar jogo</button>
        </div>
    );
};
export default GameOver;
