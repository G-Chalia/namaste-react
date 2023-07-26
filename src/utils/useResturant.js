import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/// hook doesn't  return jsx while normal function return jsx
const useResturant = (restId) => {
  const [restaurant, setRestaurant] = useState(null);

  console.log(restId);
  useEffect(() => {
    getResturantInfo();
  }, []);

  const getResturantInfo = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.8955152&lng=76.606611&restaurantId=${restId}`
      );
      const json = await data.json();
      setRestaurant(json);
    } catch (e) {
      console.log("Error", e);
    }
  };

  return restaurant;
};

export default useResturant;
