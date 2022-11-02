
import Link from 'next/link';
import { useState } from 'react';
import ItemNav from './itemNav';

const SideNavLayout = ({keywords, navTitle, className, icons}) => {
  // const [state, setState] = useState(false);
  const [state, setState] = useState(true);
  const mouseHandler = (e) => {
    setState(!state)
    const dom = e.target;
    
    console.log({dom});
  }


  return (
    <div className="w-full pb-2 border-b-1">
      <h3 className={className}>{navTitle}</h3>
      <div className="flex flex-col">
        {keywords.map(({link, title}, i) => {
           
          return (
            <Link href={link} key={i}>
              <div className="
                relative
                flex
                items-center
                justify-between
                w-full
                pb-3 
                text-13 
                font-sans 
                cursor-pointer 
                bg-blue-100
                hover:underline"
                onMouseOver={mouseHandler}
                onMouseOut={mouseHandler}
              >
                {title}から探す
                {icons}
                {state && <ItemNav />}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}

export default SideNavLayout;

{/* <div className="pb-2 border-b-1">
        <p className='text-xl font-sans font-semibold'>探す</p>
        <SideNavLayout keywords={searchKeywords}/>
      </div> */}