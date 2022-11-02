import { useState } from "react"
import OpenMenu from "./openMenu";
import CloseMenu from "./closeMenu";

export default function MobileMenuBtn () {
  const [state, setState] = useState(false);
  const toggleMenu = () => setState(!state)

  return (
    <>
      {
        state ? <CloseMenu event={toggleMenu} /> : <OpenMenu event={toggleMenu}/>
      }
    </>
  )
}