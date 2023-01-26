import React, { useState, useEffect } from "react";
import VerticalCard from "./VerticalCard";
// import axios from "axios";

function DataFetching() {
  //   useEffect(() => {
  //     axios
  //       .get("https://api.sampleapis.com/coffee/hot")
  //       .then((res) => {
  //         setCoffee(res.data);
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   });

  const [coffee, setCoffee] = useState([]);
  const getData = async () => {
    const resp = await fetch("https://api.sampleapis.com/coffee/hot");
    const json = await resp.json();
    setCoffee(json);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid gap-4 grid-cols-4 grid-rows-3 place-content-center">
      {coffee.map((coffee) => (
        <VerticalCard
          title={coffee.title}
          description={coffee.description}
          image={coffee.image}
        />
      ))}
    </div>
  );
}

export default DataFetching;
