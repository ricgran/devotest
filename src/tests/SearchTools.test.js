import { fireEvent, render, screen } from "@testing-library/react";
import SearchTools from "../components/SearchTools"
import "@testing-library/jest-dom"

describe("SearchTools", () => {
    const mockSearch = jest.fn();
    const mockItems = [ "mockMovie1", "mockMovie2", "mockMovie3", "mockMovie4", "mockMovie5", "testMovie" ];

    test("searches correct phrase on enter key", () => {
        render(<SearchTools options={ mockItems } search={ mockSearch }/>)

        const inputField = screen.getByTestId("input"); 
        
        fireEvent.change(inputField, {
            target: { value: "test the input" }
        });

        fireEvent.keyUp(inputField, { key: "Enter", code: "Enter", charCode: 13 })

        expect(mockSearch).toHaveBeenCalledWith("test the input");
    });

    test("searches correct phrase on button click", () => {
        render(<SearchTools options={ mockItems } search={ mockSearch }/>)

        const inputField = screen.getByTestId("input"); 
        
        fireEvent.change(inputField, {
            target: { value: "test the input" }
        });

        fireEvent.click(screen.getByText("Search!"));

        expect(mockSearch).toHaveBeenCalledWith("test the input");
    });

    test("suggestions sort on match", () => {
        render(<SearchTools options={ mockItems } search={ mockSearch }/>)

        const inputField = screen.getByTestId("input"); 
        
        fireEvent.change(inputField, {
            target: { value: "test" }
        });

        expect(screen.queryByText("mockMovie1")).not.toBeInTheDocument();
        expect(screen.queryByText("mockMovie2")).not.toBeInTheDocument();
        expect(screen.queryByText("mockMovie3")).not.toBeInTheDocument();
        expect(screen.queryByText("mockMovie4")).not.toBeInTheDocument();
        expect(screen.queryByText("mockMovie5")).not.toBeInTheDocument();
        expect(screen.getByText("testMovie")).toBeInTheDocument();
    });

    test("suggestion show only 5", () => {
        render(<SearchTools options={ mockItems } search={ mockSearch }/>)

        const inputField = screen.getByTestId("input"); 
        
        fireEvent.change(inputField, {
            target: { value: "movie" }
        });

        expect(screen.getByText("mockMovie1")).toBeInTheDocument();
        expect(screen.getByText("mockMovie2")).toBeInTheDocument();
        expect(screen.getByText("mockMovie3")).toBeInTheDocument();
        expect(screen.getByText("mockMovie4")).toBeInTheDocument();
        expect(screen.getByText("mockMovie5")).toBeInTheDocument();
        expect(screen.queryByText("testMovie")).not.toBeInTheDocument();
    });
})
