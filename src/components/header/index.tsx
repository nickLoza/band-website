import { Link } from "react-router-dom"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { BsArrowRight } from "react-icons/bs"
import { useState } from "react";


function Header() {

	const [toggle, setToggle] = useState(false);



	function onClickHandler(){
		setToggle(!toggle)
	}

	return (
		<header className='header'>
			<nav className="header__nav nav">
				<a href="/home" className="nav__logo">
					<img 
					className="nav__logo-img"
					src="https://i.postimg.cc/jSKXJRt4/logo-pulp.webp" 
					alt="band logo"/>
				</a>
				<button className="nav__toggle" onClick={onClickHandler}>
					{toggle? <AiOutlineClose/> : <AiOutlineMenu/>}
				</button>
				<ul className={toggle? "nav__menu active" : "nav__menu"} onClick={onClickHandler}>
					<li className="nav__menu-li">
						<Link to="home" className="nav__menu-link link">
							Home <BsArrowRight className="link__arrow"/>
						</Link>
					</li>
					<li className="nav__menu-li">
						<Link to="/shop/tickets" className="nav__menu-link link">
							Tickets <BsArrowRight className="link__arrow"/>
						</Link>
					</li>
					<li className="nav__menu-li">
						<Link to="/shop/clothing" className="nav__menu-link link">
							Clothing <BsArrowRight className="link__arrow"/>
						</Link>
					</li>
					<li className="nav__menu-li">
						<Link to="faqs" className="nav__menu-link link">
							FAQs <BsArrowRight className="link__arrow"/>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header