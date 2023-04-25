import { screen, render, fireEvent } from "@testing-library/react";
import Layout from "..";
import { MemoryRouter } from "react-router-dom";

describe("Layout",()=>{

	beforeEach(()=>{
		render(
			<MemoryRouter>
				<Layout/>
			</MemoryRouter>)
	})
	test("should render components and home page",async()=>{
		
		expect(screen.getByRole("banner")).toBeDefined()
		expect(screen.getByRole("contentinfo")).toBeDefined()
	})
	test("should render the home page sections", async()=>{
		expect(await screen.findByText(/Longpigs, world tour/i)).toBeDefined()
		expect(await screen.findByText(/Next Concerts/i)).toBeDefined()
		expect(await screen.findByText(/albums/i)).toBeDefined()
		expect(document.title).toBe("Longpigs -Home")
	})
	test("should change page on link click",async()=>{
		const homeLink = screen.getAllByRole("link", {name: /home/i});
		const clothingLink = screen.getByRole("link", {name: /clothing/i});
		const ticketsLink = screen.getAllByRole("link", {name: /tickets/i});
		const faqsLink = screen.getByRole("link", {name: /faqs/i});
		fireEvent.click(clothingLink);
		expect(await screen.findByRole("heading", {name: /clothing/i}))
		fireEvent.click(ticketsLink[0]);
		expect(await screen.findByRole("heading", {name: /tickets/i}))
		fireEvent.click(faqsLink);
		expect(await screen.findByRole("heading", {name: /faqs/i}))
		fireEvent.click(homeLink[0]);
		expect(await screen.findByRole("heading", {name: /Longpigs, world tour/i}))
	})
})