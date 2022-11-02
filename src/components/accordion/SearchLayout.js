import Link from "next/link"
import { useState } from "react"

export default function SearchLayout({props}) {
  const [state, setState] = useState(false);

  const eventHandler = (e) => {
    setState(!state) 
    console.log(state);
    // console.log(e.target);
  }


  return (
    <div className="flex flex-col w-24 h-full bg-red-100">
      {props.map(({link,name, type, children}, i) => {
        return (
          <div className="
            w-full 
            py-4 
            mb-4 
            bg-gray-100"
            datatype={type}
            key={i}
            onMouseLeave={ eventHandler }
            onMouseEnter={ eventHandler}
          >
            <Link href={link}>
              <a>{name}</a>
            </Link>
            {children}
          </div>
        )
      })}
    </div>
  )
}