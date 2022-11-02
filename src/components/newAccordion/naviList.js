import Link from "next/link"


export default function NaviLayout({props}) {

  return (
    <div className="flex flex-col w-24 h-full bg-red-100">
      {
        props.map(({link, name, type, children}, i) => {
          return(
            <div className="
              w-full
              py-4 
              mb-4 
              bg-gray-100"
              key={i}
              // onMouseLeave={ eventHandler }
              // onMouseEnter={ eventHandler}
            >
              <Link href={link}>
                <a>{name}</a>
              </Link>
            </div>
          )
        })        
      }
    </div>
  )
}