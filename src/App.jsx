// css
import "./styles/app.scss";

//react
import { useCallback, useEffect, useState } from "react";

//dados
import { wordsList } from "./data/words";

//components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
    { id: 1, name: "start" },
    { id: 2, name: "game" },
    { id: 3, name: "end" },
];

function App() {
    const [gameStage, setGameStage] = useState(stages[0].name);
    const [words] = useState(wordsList);

    const [pickedWord, setPickedWord] = useState("");
    const [pickedCategory, setPickedCategory] = useState("");
    const [letters, setLetters] = useState([]);

    const pickWordandCategory = () => {
        //pick a radonm category
        const categories = Object.keys(words);
        const category =
            categories[
                Math.floor(Math.random() * Object.keys(categories).length)
            ];

        //pick a radonm word
        const word =
            words[category][Math.floor(Math.random() * words[category].length)];

        return { word, category };
    };

    //starts the secret word game
    const startGame = () => {
        //pick word and pick category
        const { word, category } = pickWordandCategory();

        //create an array of letters
        let wordLetters = word.split("");
        console.log(wordLetters);

        wordLetters = wordLetters.map((l) => {
            return l.toLowerCase();
        });
        console.log(word, category);
        console.log(wordLetters);

        //fill states
        setPickedWord(word);
        setPickedCategory(category);
        setLetters(letters);

        setGameStage(stages[1].name);
    };

    //process the letter input
    const verityLetter = () => {
        setGameStage(stages[2].name);
    };

    //restarts the game
    const retry = () => {
        setGameStage(stages[0].name);
    };

    return (
        <div className="App">
            {gameStage === "start" && <StartScreen startGame={startGame} />}
            {gameStage === "game" && <Game verityLetter={verityLetter} />}
            {gameStage === "end" && <GameOver retry={retry} />}
        </div>
    );
}

export default App;
