import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RestMenu = () => {
  const params = useParams();
  const [restInformation, setRestInformation] = useState({});
  console.log("params", params);

  //   useEffect(() => {
  //     getResturantInfo();
  //   });

  //   const getResturantInfo = async () => {
  //     const data = await fetch();
  //     const json = await data.json();
  //     setRestInformation(json);
  //   };
  return (
    <div>
      <h1>Resturant {params.id} </h1>
      <h2>Resturant Name</h2>
    </div>
  );
};

export default RestMenu;
