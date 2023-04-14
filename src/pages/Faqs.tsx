

const faqsData = [
	{question: "lorem ipsum lorem?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rerum suscipit qui aliquam tempora architecto sit optio voluptas voluptates totam? Qui magni harum commodi nam ipsum reiciendis minus delectus ratione." },
	{question: "lorem ipsum lorem?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rerum suscipit qui aliquam tempora architecto sit optio voluptas voluptates totam? Qui magni harum commodi nam ipsum reiciendis minus delectus ratione." },
	{question: "lorem ipsum lorem?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rerum suscipit qui aliquam tempora architecto sit optio voluptas voluptates totam? Qui magni harum commodi nam ipsum reiciendis minus delectus ratione." },
	{question: "lorem ipsum lorem?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rerum suscipit qui aliquam tempora architecto sit optio voluptas voluptates totam? Qui magni harum commodi nam ipsum reiciendis minus delectus ratione." },
	{question: "lorem ipsum lorem?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rerum suscipit qui aliquam tempora architecto sit optio voluptas voluptates totam? Qui magni harum commodi nam ipsum reiciendis minus delectus ratione." }
]

function Faqs() {
	return (
		<main className="faqs">
			<h2 className="faqs__title">FAQs</h2>
			<div className="faqs__grid">
				{faqsData.map((item, i)=>(
					<div key={i} className="faqs__grid-item">
						<b  className="faqs__grid-question">Q.  {item.question}</b>
						<p className="faqs__grid-answer">A. {item.answer}</p>
					</div>
				))}
			</div>
		</main>
	)
}

export default Faqs