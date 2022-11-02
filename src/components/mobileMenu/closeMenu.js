
const CloseMenu = ({event}) => {
  return (
    <div className="flex flex-col w-10 h-10 justify-between bg-gray-200" onClick={event} >
    <span className="translate-y-5 w-full h-1 bg-red-500 rotate-45 duration-75"></span>
    <span className="transition delay-500 scale-50"></span>
    <span className="-translate-y-4 w-full h-1 bg-red-500 rotate-135 "></span>
  </div>
  )
}

export default CloseMenu