
const OpenMenu = ({event}) => {
  return (
    <div className="flex flex-col w-10 h-10 justify-between bg-gray-200" onClick={event} >
      <span className="w-full h-1 bg-red-500"></span>
      <span className="w-full h-1 bg-red-500"></span>
      <span className="w-ful h-1 bg-red-500"></span>
    </div>
  )
}

export default OpenMenu;