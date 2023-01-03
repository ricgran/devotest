import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
    test("renders without issue", () => {
        const mockItems = [ {
            id: 1,
            name: "testName",
            description: "testDescription",
            duration: 666,
            genres: [ "testGenre" ]
        } ];
        
        expect(() => render(<SearchResults items={ mockItems } />)).not.toThrow();
    });
})
