import '../../styles/globals.css'
import "tailwindcss/tailwind.css"
import { AppProvider } from './context/AppContext'
import Header from '../components/header'
import Footer from '../components/footer'
import Slider from '../components/slider';
import Home from './home'
import AccordionMenu from '../components/accordion'
import AccoridonNavi from '../components/newAccordion'
import { topsContext } from '../components/newAccordion/itemsContext'
function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      {/* <Header /> */}
      {/* <Slider /> */}
      {/* <Home /> */}
      {/* <Component {...pageProps} /> */}
      {/* <Footer footerYear={"2022"} footerName={"模擬サイト"}/> */}
      {/* <AccordionMenu /> */}
      <AccoridonNavi naviTitle={topsContext}/>
    </AppProvider>
  )
}

export default MyApp
