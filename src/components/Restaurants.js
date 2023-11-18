import { useEffect, useState } from "react";
import _ from "lodash";
import Resto from "./Resto";
import './Restaurant.css';

const RESTAURANT = "https://cors.proxy.consumet.org/https://nextjs-orpin-omega-98.vercel.app/api/restaurants";

function Restaurants() {
    const [resto, setResto] = useState([])

useEffect(() => {
    fetchData();
}, []);

async function fetchData() {
    const res = await fetch(RESTAURANT, {
        mode: 'cors',
      });
    const jsonRes = await res.json();
    const data = jsonRes;
    setResto(data);
}

const output = _.groupBy(resto, "state");
const neew = Object.values(resto)
let myKeys = Object.keys(output);

  return (
        <div className="MainContainer">
            <Resto myKeys={myKeys} neew={neew}/>
        </div>
)
}

export default Restaurants
