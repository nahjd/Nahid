import React from 'react'
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from "react";
function Categories() {
  let [category, setCategory] = useState([]);
  let [name, setName] = useState("");
  let [description, setDescription] = useState("")
    useEffect(() => {
      axios.get("https://northwind.vercel.app/api/categories").then((res) => {
        setCategory(res.data)
       
      })
    }, []);
    console.log(category)
  return (
    <>
      <ul>
     {category.map((item) => {
      return (
        <li key={uuidv4()}>
          {item.name} <button>edit</button>
          <button>delete</button>
        </li>
      );
     })}
      </ul>
      <form 
      action=""
      type="text" 
      placeholder='category names'
      onChange={(e) => {
        e.preventDefault;
        let obj = {
          id:id,
          name:name,
          description:description,
        };
        setName("")
        setDescription("")
        setName(e.target.value)
      }}>
       <input
         action=""
         type="text" 
         placeholder='category names' 
         onChange={(e) => {
           setName(e.target.value)
         }}
           />
           

           <input
         action=""
         type="text" 
         placeholder='category desc' 
         onChange={(e) => {
           setDescription(e.target.value)
         }}
           />
          <button>Add</button>
      </form>
     
    </>
  )
}

export default Categories;