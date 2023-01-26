import React, { useEffect, useState } from "react";
import CoffeeList from "../components/CoffeeList";
import DataFetching from "../components/DataFetching";
import Header from "../components/Header";
// const libros = [
//   {
//     id: 1,
//     title: "El señor del anillo",
//     pages: 900,
//     year: "1990",
//     versions: {
//       first: "Yanquee",
//       second: "Argentina",
//     },
//   },
//   {
//     id: 2,
//     title: "Anillos",
//     pages: 900,
//     year: "1990",
//     versions: {
//       first: "Yanquee",
//       second: "Argentina",
//     },
//   },
//   {
//     id: 3,
//     title: "Sopa de queso",
//     pages: 900,
//     year: "1990",
//     versions: {
//       first: "Yanquee",
//       second: "Argentina",
//     },
//   },
// ];
// console.log('Los libros son: ', libros);

// let libros_mapped = libros.map( (libro) => {
//   return libro.title
// })
// console.log(libros_mapped);

function MainPage() {
  return (
    <>
      <div className="bg-indigo-100">
        {/* <h1 className="font-bold text-4xl text-center">Some of the well knows coffees!!!</h1> */}
        <Header />
        <DataFetching />
      </div>
    </>
  );
}

export default MainPage;
