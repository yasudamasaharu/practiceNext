// import SearchLayout from "./SearchLayout"
// import ItemLayout from "./itemsLayout"
// import {categoryContext, favoriteContext, searchContext} from "./NaviContext"
// import { topsContext } from "./itemsContext"
// import { useState, createContext } from "react"
// import ItemNav from "./itemNav"
// import Navi from "./wrap"

// export const ItemsContext = createContext();
// export const NavContext = createContext();


// export default function useAccordion() {

//   const [itemsAreaState, setItemsAreaState] = useState(false);
//   const [naviAreaState, setNaviAreaState] = useState(false);

//   return (
//     <>
//       <p>探す</p>
      
//       <ItemsContext.Provider value={[itemsAreaState, setItemsAreaState]}>

//       </ItemsContext.Provider>
//       <Navi naviContext={categoryContext} itemContext={topsContext}/>  
//       {/* <p>カテゴリーから探す</p>
//       <SearchLayout props={searchContext} />
//       <p>お気に入り</p>
//       <SearchLayout props={favoriteContext} /> */}
//       {/* <ItemNav props={topsContext} />
//       <ItemNav props={topsContext} /> */}
//     </>
//   )
// } 