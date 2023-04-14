import { lazy, Suspense } from "react"
import { Navigate } from "react-router"
import { Route, Routes } from "react-router-dom"
import { PuffLoader } from "react-spinners";

const Faqs = lazy(()=>import ("../pages/Faqs"));
const Home = lazy(()=>import ("../pages/Home"));
const Shop = lazy(()=>import ("../pages/Shop"));

function Routers() {
	return (
		<Suspense fallback={
			<PuffLoader
			  className="spinner"
			  color="#a6a6a6"
			  size={100}/>}>
			<Routes>
				<Route path="/" element={<Navigate to="home"/>}/>
				<Route path="home" element={<Home/>}/>
				<Route path="faqs" element={<Faqs/>}/>
				<Route path="shop" element={<Shop filter="all"/>}/>
				<Route path="shop/tickets" element={<Shop filter="tickets"/>}/>
				<Route path="shop/clothing" element={<Shop filter="clothing"/>}/>
			</Routes>
		</Suspense>
	)
}

export default Routers