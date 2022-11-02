import SideNavLayout from './sideNavLayout';
import { searchKeywords, categoryKeywords, favoriteKeywords } from './context';
import { FaAngleRight } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function SideNav() {
  const icon = <FaAngleRight className='text-lg text-gray-300' />
  
  return (
    <div className="flex flex-col max-w-24 w-1/4 px-4 bg-gray-100">
      <SideNavLayout navTitle="探す" className="mt-6 my-3 text-xl leading-normal font-sans font-semibold" keywords={searchKeywords}/>
      <SideNavLayout navTitle="カテゴリーから探す" className="my-3 text-15 leading-normal font-sans font-semibold" keywords={categoryKeywords} icons={icon}/>
      <SideNavLayout navTitle="お気に入り" className='my-3 text-15 leading-normal font-semibold' keywords={favoriteKeywords} icons={icon}/>
    </div>
  )
}