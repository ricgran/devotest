import { render } from "@testing-library/react";
import SearchMovies from "../components/SearchMovies";

describe("SearchMovies", () => {
    test("renders without issue", () => {
        expect(() => render(<SearchMovies />)).not.toThrow();
    });
})
