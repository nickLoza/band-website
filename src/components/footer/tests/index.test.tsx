import { screen, render, fireEvent } from "@testing-library/react";
import Footer from "..";
import { MemoryRouter } from "react-router-dom";

describe("Footer",()=>{

	beforeEach(()=>{
		render(<MemoryRouter>
					<Footer/>
				</MemoryRouter>)
	})

	test("component should be shown",()=>{
		const bandLogo = screen.getByAltText(/band logo/i);
	})
	test("should contain 4 links",()=>{
		expect(screen.getAllByRole('link')).toHaveLength(4)
	})
})