

import axios from "axios";
import { useState, useEffect } from "react";


function Tablex() {
    const [data,setData] = useState([]);
useEffect(() => {

  axios("https://northwind.vercel.app/api/products/").then((res) => {
    console.log(res.data);
    setData(res.data);
});

}, [])

 
}
            



export default Tablex;