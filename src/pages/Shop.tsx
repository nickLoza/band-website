import { useEffect, useState } from "react"
import Helmet from "../components/helmet";
import products from "../products/products"

interface IShop{
	filter: "tickets"|"clothing"|"all"
}

interface IProducts{
	id: number, 
	img: string,
	type: string, 
	title: string, 
	price: number
}

function Shop({ filter }:IShop) {

	const [ filteredProducts, setFilteredProducts ] = useState<Array<IProducts>>();

	useEffect(()=>{
		if(filter==="all") setFilteredProducts(products)
		else{
			setFilteredProducts(products.filter(prod=>prod.type===filter))
		}
	},[filter])

	return (
		<Helmet title={`Shop ${filter}`}>
			<main className="shop">
				<h1 className="shop__title">{filter}</h1>
				<div className="shop__products">
					{filteredProducts?.map(prod=>(
						<div key={prod.id} className="shop__products-product product">
							<img className="product__img" src={prod.img} alt={prod.title}/>
							<div className="product__text">
								<p className="product__text-title">
									{prod.title}
								</p>
								<p className="product__text-price">
									${prod.price}
								</p>
							</div>
						</div>
					))}
				</div>
			</main>
		</Helmet>
	)
}

export default Shop