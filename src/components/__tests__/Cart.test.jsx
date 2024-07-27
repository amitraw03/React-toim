
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { render, screen, fireEvent } from "@testing-library/react";
import MOCK_DATA from "../mocks/resItemListDataMock.json";
import "@testing-library/jest-dom";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";


//lookalike ResMenu API fetching
global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)

})
);

//Integration Testing--- on the Restaurant Menu that by clicking the categories we got our itemfoodList and also by clciking addbtn we are getting those items shown by Cart in header 
//                       & also those selecteditems should reflect in the cart.jsx component
it("should render Restaurant Menu Component", async () => {
    await act(async () =>
        render(
            // need of Provider for the using react-redux store as it required in RestaurantMenu
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <Cart/>
                    <RestaurantMenu />
                </Provider>
            </BrowserRouter>
        )
    )

    const accordianHeader = screen.getByText("Drinks (9)");
    fireEvent.click(accordianHeader);

    const foodItems = screen.getAllByTestId("foodItems");
    expect(foodItems.length).toBe(9);


    const addbtns = screen.getAllByRole("button", { name: "add+" });
    fireEvent.click(addbtns[0]);
    fireEvent.click(addbtns[2]);
    expect(screen.getByText("🛒Cart(2)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(11);   //9 drinks become 11 by adding 2 in the cart coz those selected ones also  have same id

    fireEvent.click(screen.getByRole("button",{name :"Clear Cart"}));  //testing clear cart btn

    expect(screen.getAllByTestId("foodItems").length).toBe(9);    //clear btn working id length of drinks becomes original

    expect(screen.getByText("Cart is empty , Please add items to the Cart!!")).toBeInTheDocument();  //empty i.e showing text on no items condn

});


