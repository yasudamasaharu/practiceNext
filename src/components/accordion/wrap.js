import SearchLayout from "./SearchLayout"
import ItemLayout from "./itemsLayout"


export default function Navi(naviContext, itemContext) {
  return (
    <SearchLayout props={naviContext}>
      <ItemLayout props={itemContext}/>
    </SearchLayout>
  )
}