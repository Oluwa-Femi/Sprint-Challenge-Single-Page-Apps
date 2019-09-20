import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

const characterApi = "https://rickandmortyapi.com/api/character/";
function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState([]);
  const [display, setDisplay] = useState([]);
  const [searchList, setsearchList] = useState ("");

  const fetchCharacters = () => {
    axios
      .get(characterApi)
      .then(res => {
        setCharacterList(res.data.results);
        console.log("Yassssss", res.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const searchBox = () => {
        setDisplay(
          characterList.filter(monsterChar =>
            monsterChar.name.toLowerCase().includes(searchList.toLowerCase())
          )
        );
      };

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    fetchCharacters();
  }, []);

  useEffect(() => {
    setDisplay(characterList);
  }, [characterList]);

  useEffect(() => {
    searchBox();
  }, [searchList]);

  return (
    <section className="character-list">
       <Header />
       <input
        type="search"
        placeholder="search monsters"
        value={searchList}
        onChange={e => setsearchList(e.target.value)}
      />
      {display.map(character => (
        <div>
        <h3 key={character.name}> {character.name}</h3>
        <h5 key={character.gender}> {character.gender}</h5>
        <h6 key={character.status}> {character.status}</h6>
        </div>
      ))}
    </section>
  );
}

export default CharacterList;