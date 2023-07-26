import RestruantCard from "./ResturantCard";
import { restData } from "../constants";
import { useEffect, useState } from "react";
import jsonData from "./data.json";
import ShimmerUI from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allrestaurant, setallRestaurant] = useState([]);
  const [filteredrestaurant, setfilteredRestaurant] = useState([]);
  const [search, setSearch] = useState(Boolean);
  const [loading, setLoading] = useState(false);

  const localStorage = window.localStorage;
  console.log("local", localStorage);

  const filterData = (restaurant, searchText) => {
    //console.log(restaurant);
    const filter_Data = restaurant.filter((res) =>
      res.data.name.includes(searchText)
    );
    return filter_Data;
  };

  const onSearch = (e) => {
    // if (!search) {
    //   setfilteredRestaurant(restaurant);
    //  // setRestaurant(restaurant);
    // }
    e.target.length !== 0 ? setSearch(true) : setSearch(false);
    setSearchText(e.target.value);
  };

  useEffect(() => {
    //console.log(jsonData?.data?.cards);
    fetchData();
  }, []);

  async function fetchData() {
    try {
      // const data = await fetch(
      //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.8955152&lng=76.606611&page_type=DESKTOP_WEB_LISTING"
      // );
      // if (!data.ok) {
      //   throw new Error("Failed to fetch");
      // }
      // const json = await data.json();
      console.log("json", jsonData?.data);
      setallRestaurant(jsonData?.data?.cards[2]?.data?.data?.cards);
      setfilteredRestaurant(jsonData?.data?.cards[2]?.data?.data?.cards);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Offline, Please Check Your Internet Connection</h1>;
  }

  return (
    <>
      <div className="p-5 bg-pink-50 my-5 w-1/3 rounded-xl shadow-lg">
        <input
          type="text"
          className="search-text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => onSearch(e)}
        />
        <button
          className="p-2 m-2 bg-purple-700 text-white"
          onClick={() => {
            const data = filterData(allrestaurant, searchText);
            setfilteredRestaurant(data);
            setSearch(false);
          }}
        >
          Search
        </button>
      </div>
      {loading ? (
        <ShimmerUI />
      ) : (
        <div className="flex flex-wrap justify-evenly">
          {filteredrestaurant && filteredrestaurant.length !== 0 ? (
            filteredrestaurant.map((restaurant, index) => {
              return (
                <Link to={"/restaurant/" + restaurant.data.id} key={index}>
                  <RestruantCard
                    {...restaurant.data}
                    key={restaurant.data.id}
                  />
                </Link>
              );
            })
          ) : search ? (
            <h1>No Data Found</h1>
          ) : null}
        </div>
      )}
    </>
  );
};

export default Body;
