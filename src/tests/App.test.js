import { render } from "@testing-library/react";
import App from "../components/App"

test("renders without issue", () => {
    expect(() => render(<App />)).not.toThrow();
});
