import { render } from "@testing-library/react";
import Helmet from "..";

describe("Helmet",()=>{

	test("should modify document title",()=>{
		render(
		<Helmet title="test">
			<div></div>
		</Helmet>)
		expect(document.title).toBe("Longpigs -test");
	})
})