import { AiOutlineInstagram } from "react-icons/ai";
import { FaSpotify } from "react-icons/fa";
import { SiMyspace } from "react-icons/si";


function Footer() {
	return (
		<footer className="footer">
			<div className="footer__flex">
				<div className="footer__flex-item item">
					<p className="item__title">POLICIES</p>
					<p className="item__text">Lorem ipsum, dolor sit amet consectetur, adipisicing elit.</p>
					<p className="item__text">Refund policy</p>
				</div>
				<div className="footer__flex-item item">
					<p className="item__title">SUSCRIBE</p>
					<p className="item__text">Lorem ipsum, dolor sit amet consectetur, adipisicing elit.</p>
				</div>
				<div className="footer__flex-item item">
					<a href="home" className="item__logo">
						<img 
						src="https://i.postimg.cc/jSKXJRt4/logo-pulp.webp" 
						alt="band logo"/>
					</a>
					<div className="item__socials">
						<a href="http://www.instagram.com" 
							target="_blank" 
							className="item__socials-link">
							<AiOutlineInstagram/>
						</a>
						<a href="http://www.spotify.com" 
							target="_blank" 
							className="item__socials-link">
							<FaSpotify/>
						</a>
						<a href="http://www.myspace.com" 
							target="_blank"  
							className="item__socials-link">
							<SiMyspace/>
						</a>
					</div>
				</div>
			</div>
			<p className="footer__copyright">©Longpigs 2022 All Rights Reserved.</p>
		</footer>
	)
}

export default Footer