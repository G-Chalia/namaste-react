import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useResturant from "../utils/useResturant";

const RestMenu = () => {
  const params = useParams();

  const restInformation = useResturant(params.id);
  //const [restInformation, setRestInformation] = useState({});
  console.log("params", restInformation);

  return (
    <div>
      <h1>Resturant {params.id} </h1>
      <h2>Resturant Name</h2>
    </div>
  );
};

export default RestMenu;
