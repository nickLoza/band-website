import Routers from "../../routers/Routers"
import Footer from "../footer"
import Header from "../header"
import PreFooter from "../preFooter"

function Layout() {
	return (
		<>
			<Header/>
			<Routers/>
			<PreFooter/>
			<Footer/>
		</>
	)
}

export default Layout