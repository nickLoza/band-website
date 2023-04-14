
const columnsArray = [
	{imgUrl: "https://i.postimg.cc/8k3C2LR3/band-1.webp",linkUrl: "#", linkText: "Spotify"},
	{imgUrl: "https://i.postimg.cc/zXgf83pf/band-2.webp",linkUrl: "#", linkText: "Instagram"},
	{imgUrl: "https://i.postimg.cc/C5WLbVMY/band-3.webp",linkUrl: "#", linkText: "MySpace"},
]

function PreFooter() {
	return (
		<section className='pre-footer'>
			<h3 className="pre-footer__title">Follow us</h3>
			<div className="pre-footer__columns">
				{columnsArray.map((col, i)=>(
				<div key={i} className="pre-footer__columns-column column">
					<a href={col.linkUrl} target="_blank">
						<img className="column__img" src={col.imgUrl} alt="the band in a concert"/>
					</a>
					<a className="column__link" href={col.linkUrl}>{col.linkText}</a>
				</div>
				))}
			</div>
		</section>
	)
}

export default PreFooter