// import React, { useState } from "react";

//  export default function SearchForm({ onSearch }) {
//   const [query, setQuery] = useState({
//     name: ""
//   })
//   const handleInputChange = (event) => {
//     setQuery({ ...query, name: event.target.value })
//   }
//   return (
//     // <section className="search-form">
//     //   {/* <form onSubmit={() => onSearch(query)}> */}
      
//     //     {/* <input
//     //       onChange={handleInputChange}
//     //       placeholder="name"
//     //       value={query.name}
//     //       name="name"
//     //     />
//     //     <button type="submit">Search</button> */}
//     //   {/* </form> */}
//     // </section>
//   );
// }




























// const characterApi = "https://rickandmortyapi.com/api/character/";
// export default function CharacterList() {
//   // TODO: Add useState to track data from useEffect

//   const [characterList, setCharacterList] = useState(result);
//   const [display, setDisplay] = useState([]);

//   const [searchList, setsearchList] = useState("");

//   const fetchCharacters = () => {
//     axios
//       .get(characterApi)
//       .then(res => {
//         setCharacterList(res.data.results);
//       })
//       .catch(err => {
//         return err.message;
//       });
//   };

//   useEffect(() => {
//     fetchCharacters();
//   }, []);

//   useEffect(() => {
//     setDisplay(characterList);
//   }, [characterList]);

//   useEffect(() => {
//     searchBox();
//   }, [searchList]);

//   const searchBox = () => {
//     setDisplay(
//       characterList.filter(monsterChar =>
//         monsterChar.name.toLowerCase().includes(searchList.toLowerCase())
//       )
//     );
//   };

//   return (
//     <section className="character-list">
//       <Header />

//       <input
//         type="search"
//         placeholder="serach monsters"
//         value={searchList}
//         onChange={e => setsearchList(e.target.value)}
//       />
//       {display.map(character => (
//         <div>
//           <h5 key={character.name}> {character.name}</h5>
//           <p>{character.status}</p>
//           <p>{character.gender}</p>
//           {/* <Character
//             ident={character.id}
//             name={character.name}
//             status={character.status}
//             singleChara={searchBox}
//           /> */}
//         </div>
//       ))}
//     </section>
//   );