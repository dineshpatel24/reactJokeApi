import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [joke, setJoke] = useState("");

  const jokeUrl = "https://official-joke-api.appspot.com/random_joke";
  const getNewJoke = async () => {
    let joke = await fetch(jokeUrl);
    let jokeRes = await joke.json();
    console.log(jokeRes);
    setJoke({ setup: jokeRes.setup, punchline: jokeRes.punchline });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let joke = await fetch(jokeUrl);
      let jokeRes = await joke.json();
      console.log(jokeRes);
      setJoke({ setup: jokeRes.setup, punchline: jokeRes.punchline });
    }
    getFirstJoke();
  },[]);

  return (
    <>
      <h1>Joker!</h1>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>

      <button onClick={getNewJoke}>New Joke!</button>
    </>
  );
}

export default App;
