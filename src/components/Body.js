import RestruantCard from "./ResturantCard";
import { restData } from "../constants";
import { useState } from "react";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const onChangeInput = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => onChangeInput(e)}
        />
      </div>
      <div className="resturant-list">
        {restData &&
          restData.map((restaurant) => {
            return (
              <RestruantCard {...restaurant.data} key={restaurant.data.id} />
            );
          })}
      </div>
    </>
  );
};

export default Body;
