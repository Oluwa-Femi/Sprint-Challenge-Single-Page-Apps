import React, { useState, useEffect } from "react";

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState({
    name: ""
  })
  const handleInputChange = (event) => {
    setQuery({ ...query, name: event.target.value })
  }
  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(query)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={query.name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}



// export default function SearchForm({ onSearch }) {
// const [search, setSearch] = useState({ name: '' });
// const handleInputChange = event => {
//   setSearch({ ...search, name: event.target.value });
// };
//   return (
//     <section className="search-form">
//      {/* // Add a search form here */}
//       <form onSubmit={() => onSearch(search.name)}>
//         <input
//           onChange={handleInputChange}
//           placeholder='name'
//           value={search.name}
//           name='name'
//         />
//         <button type='submit'>Search</button>
//       </form>
//     </section>
//   );
// }
