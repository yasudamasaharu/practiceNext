import ItemLayout from "./itemsLayout"
import {useState, useContext} from 'react';
import { NavContext } from ".";

export default function ItemNav({props}) {
  const [naviAreaState, setNaviAreaState] = useContext(NavContext);

  const eventHandler = () => {
    setNaviAreaState(!naviAreaState)
  }


  return (
    <div className="
      flex
      flex-col
      h-30
      w-full 
      mb-20
      bg-blue-200"
      onMouseLeave={eventHandler}
      onMouseEnter={eventHandler}
    >
      {
        props.map(({link,name, type}, i) => {
          return (
            <ItemLayout link={link} name={name} datatype={type} key={i}/>
          )
        })
      }
    </div>
  )
}