import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
    it("renders general section header", () => {
        render(<App />);
        const h2 = screen.getAllByRole("heading");
        expect(h2[0].textContent).toMatch('General');
    });

    it('renders education section header', () => {
        render(<App />);
        const h2 = screen.getAllByRole("heading");
        expect(h2[1].textContent).toMatch('Highest Education');
    });

    it('renders experience section header', () => {
        render(<App />);
        const h2 = screen.getAllByRole("heading");
        expect(h2[2].textContent).toMatch('Experience');
    });

    /*it('saves the value when typed into the name field', async () => {

        render(<App />);
        const button = screen.getAllByRole('button', { name: 'Save'})
        const genBtn = button[0];
        const input = screen.getByLabelText('Name');

        userEvent.type(input, 'Robert');
        userEvent.click(genBtn);
        expect(screen.getByRole('button', { name: 'Edit'})).toHaveValue('Edit');
    })*/
});