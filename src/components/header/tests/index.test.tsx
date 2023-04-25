import { screen, render, fireEvent } from "@testing-library/react";
import Header from "..";
import { MemoryRouter } from "react-router-dom";

describe("Header",()=>{

	beforeEach(()=>{
		render(<MemoryRouter>
					<Header/>
				</MemoryRouter>)
	})

	test("component should be shown",()=>{
		const toggleBtn = screen.getByTitle(/toggle menu/i);
		const menuLink = screen.getByText(/home/i);
		const bandLogo = screen.getByAltText(/band logo/i);
		
	})

	test("should have 5 links",()=>{
		expect(screen.getAllByRole('link')).toHaveLength(5)
	})

	test("menu should toggle 'active' class on toggleBtn click",()=>{
		const toggleBtn = screen.getByTitle(/toggle menu/i);
		const menuLink = screen.getByText(/home/i);

		const menu = menuLink.closest("ul");
		expect(menu?.className === "nav__menu").toBe(true);
		fireEvent.click(toggleBtn)
		expect(menu?.className === "nav__menu active").toBe(true);
		fireEvent.click(toggleBtn)
		expect(menu?.className === "nav__menu").toBe(true);
	})
})