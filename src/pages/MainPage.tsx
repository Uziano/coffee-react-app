import React from "react";

import CoffeeList from "../components/CoffeeList";

function MainPage() {
  return (
    <body className="bg-slate-500">
      <h1 className="font-bold text-xl">Here goes some fetch practice</h1>
      <CoffeeList />
    </body>
  );
}

export default MainPage;
