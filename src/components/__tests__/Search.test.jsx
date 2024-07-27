import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/searchResListBodyMock.json"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

//HERE we did INtegration testing --************************************
//testing on the resCards w.r.t search feature
it("should Search Res List for eatfit text input", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(20);  

    const searchBtn = screen.getByRole('button', { name: "Search" });   //testing search btn component

    const searchInput = screen.getByTestId("searchInput");            //testing searchi/p component

    fireEvent.change(searchInput, { target: { value: "eatfit" } });   

    fireEvent.click(searchBtn);

    //screen should load 4 cards
    const cardsAfterSearch = screen.getAllByTestId("resCard");   //body's res card changes testing on searching "eatfit"

    expect(cardsAfterSearch.length).toBe(4);  

})

//w.r.t Top Rated feature
it("should render Top Rated Restaurants", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(20);  

    const topResBtn = screen.getByRole('button', { name: "⭐Top Rated Restaurants" });   //testing topRatedRes btn component

    fireEvent.click(topResBtn);

    //screen should load 11 cards
    const cardsAfterFilter = screen.getAllByTestId("resCard");   //body's res card changes testing on searching "eatfit"

    expect(cardsAfterFilter.length).toBe(17);  

})