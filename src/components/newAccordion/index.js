import { allItems } from "./itemsContext";
import ItemsLayout from "./itemsNaviLayout";
import { categoryContext } from "./naviContext";
import NaviLayout from "./naviList";

import {createContext,useContext, useState} from 'react';
import Link from "next/link";

export const NaviContext = createContext();
export const ItemsContext = createContext();

// console.log(categoryContext);
console.log(allItems);

const lists = categoryContext.map((el) => el.type);

for(let i = 0; i < lists.length; i++) {
  const key = lists[i];
  console.log(key);
  
  if(allItems[key]){
    console.log(allItems[key]);
  } else {
    console.log("false");
  }

}





export default function AccoridonNavi() {

  const [naviState, setNaviState] = useState();
  const [itemState, setItemState] = useState();

  const lists = categoryContext.map((el) => el.type);

  return(
    <>
      {
      }
      <NaviLayout props={categoryContext}/>
     <h1>テスト</h1>
    </>
  )
}