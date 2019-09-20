import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

const characterApi = "https://rickandmortyapi.com/api/character/";
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState([]);

  const fetchCharacters = () => {
    axios
      .get(characterApi)
      .then(res => {
        setCharacterList(res.data.results);
        console.log("Yassssss", res.data.results);
      })
      .catch(err => {
        return err.message;
      });
  };
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    fetchCharacters();
  }, []);

  return (
    <section className="character-list">
       <Header />
      {characterList.map(character => (
        <div>
        <h3 key={character.name}> {character.name}</h3>
        <h5 key={character.gender}> {character.gender}</h5>
        <h6 key={character.status}> {character.status}</h6>
        </div>
      ))}
    </section>
  );
}
