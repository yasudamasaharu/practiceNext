import Link from "next/link";
import { useState } from "react";
import { useContext } from "react";
import { ItemsContext } from ".";

export default function ItemLayout({link, name}) {
  const[ itemsAreaState, setItemsAreaState ] = useContext(ItemsContext);
  

  const delEvent = (e) => {
    e.preventDefault();
    e.stopPropagation()
  }
  return (
    <Link href={link}>
      <a 
        className="w-24 bg-orange-100"
        onMouseEnter={delEvent}
        onMouseLeave={delEvent}
      >{name}</a>
    </Link>
  )
} 