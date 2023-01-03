import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import SuggestionsMenu from "../components/SuggestionsMenu"

describe("SuggestionsMenu", () => {
    const mockSearch = jest.fn();
    const mockItems = [ "mockMovie1", "mockMovie2", "mockMovie3" ];

    test("searches correct phrase on click", () => {
        render(<SuggestionsMenu items={ mockItems } search={ mockSearch }/>)
        
        fireEvent.click(screen.getByText("mockMovie1"));
        
        expect(mockSearch).toHaveBeenLastCalledWith("mockMovie1");
    });

    test("expect items from props to appear in menu", () => {        
        render(<SuggestionsMenu items={ mockItems } search={ mockSearch }/>)
                
        expect(screen.getByText("mockMovie1")).toBeInTheDocument();
        expect(screen.getByText("mockMovie2")).toBeInTheDocument();
        expect(screen.getByText("mockMovie3")).toBeInTheDocument();
    });
})
