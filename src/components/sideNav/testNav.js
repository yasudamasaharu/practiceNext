import Link from "next/link";
import { useState } from "react";
import {obj} from "./testContext";

export default function TestNav() {
  const context = obj;
  const [state, setState] = useState(false);

  const demo = (e) => {
    setState(!state)
    console.log(state);
  }

  const deleteEvent = (e) => e.stopPropagation();
  
  return (
    <div className="flex flex-col w-200 bg-red-100" onMouseOver={demo} onMouseOut={demo}>
      {context.map(({link, navTitle}, i) => {
        return( 
          <Link href={link} key={i}>
              <a onMouseOut={deleteEvent} onMouseOver={deleteEvent}>{navTitle}</a>
            </Link>
          )
        }
      )}
    </div>
  )
}
