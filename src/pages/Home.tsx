import { Link } from "react-router-dom";
import heroUrl from "../assets/videos/hero.mp4";

const concertsData = [
	{city: "Galway, Ireland", date: "april 4th, 2023"},
	{city: "Cologne, Germany", date: "april 12th, 2023"},
	{city: "Udine, Italy", date: "april 23th, 2023"},
]
const albumsData = [
	{
		name: "The Sun Is Often Out", 
		year: 2008, 
		imgUrl:"https://i.postimg.cc/02xppR0Q/The-Sun-Is-Often-Out.webp", 
		link: "http://www.spotify.com"},
	{
		name: "Mobile Home",
		year: 2013, 
		imgUrl:"https://i.postimg.cc/RCw76Vfy/Mobile-Home.webp", 
		link: "http://www.spotify.com"
	},
	{	
		name: "On And On: The Anthology", 
		year: 2023, 
		imgUrl:"https://i.postimg.cc/rs25nv6f/OnAndOn.webp", 
		link: "http://www.spotify.com"
	}
]


function Home() {
	return (
		<>
			<Hero/>
			<Concerts/>
			<Albums/>
		</>
	)
}



function Hero(){
	return(
		<section className="hero">
				<video 
					className="hero__video"
					muted
					autoPlay
					playsInline
					loop
					src={heroUrl}/>
				<h1 className="hero__title">
					Longpigs, world tour.
				</h1>
				<Link className="hero__link" to="/shop/tickets">
					Buy tickets
				</Link>
			</section>
	)}
function Concerts(){
	return (
		<section className="next-concerts">
				<h2 className="next-concerts__title">Next Concerts</h2>
				<ul className="next-concerts__list list">
					{concertsData.map((e,i)=>(
						<li key={i} className="list__item">
							{e.city} <b>({e.date})</b>
						</li>
					))}
				</ul>
			</section>
	)}
function Albums(){
	return(
		<section className="albums">
				<h3 className="albums__title">Albums</h3>
				<div className="albums__list">
					{albumsData.map((a,i)=>(
						<a key={i} className="albums__list-album album" href={a.link} target="_blank">
							<img className="album__img" src={a.imgUrl} alt={a.name}/>
							<p className="album__title">{a.name}</p>
							<p className="album__year">{a.year}</p>
						</a>
					))}
				</div>
			</section>
	)}

export default Home