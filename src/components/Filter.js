// import { React, useState } from "react";
// import items from "../data/items";

// function Filter({ onCategoryChange }) {
//   const [data, setData] = useState(items);
//   const [filtered, setFiltered] = useState([]);
//   const [searchKeyWord, setSearchKeyWord] = useState("");

//   const handleSearch = (e) => {
//     const keyWord = e.target.value;
//     let filtered = items.filter((item) => {
//       return item.name.toLowerCase().indexOf(keyWord) > -1;
//     });

//     setData(filtered);
//     // console.log(filtered);
//   };
//   return (
//     <div className="Filter">
//       <input
//         type="text"
//         name="search"
//         placeholder="Search..."
//         onChange={handleSearch}
//       />
//       <select name="filter" onChange={onCategoryChange}>
//         <option value="All">Filter by category</option>
//         <option value="Produce">Produce</option>
//         <option value="Dairy">Dairy</option>
//         <option value="Dessert">Dessert</option>
//       </select>
//     </div>
//   );
// }

// export default Filter;

import React from "react";

function Filter({ search, onSearchChange, onCategoryChange }) {
  console.log(search);
  function handleSearchChange(event) {
    // we could pass up the whole event object via onSearchChange
    // but passing *only* the value makes the data easier to work with in the parent
    onSearchChange(event.target.value);
  }

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={handleSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
