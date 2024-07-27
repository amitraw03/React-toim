import { fireEvent, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Header from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";


test("Should render header component with a login Button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    //Querying
    const loginButton= screen.getByRole("button");
    // const loginButton= screen.getByRole("button",{name:"Login"});  //2nd para when like there are multiple buttons
    // const loginButton= screen.getByText("Login");  //can be done in this way too

    //Assert
    expect(loginButton).toBeInTheDocument();

});

it("Should render header component with a Cart item", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    //Querying
    const cartItems= screen.getByText(/Cart/);  //can be done in this way too but here it means whole cart

    //Assert
    expect(cartItems).toBeInTheDocument();

});

test("Should chnage login Button to Logout on Click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    //Querying
    const loginButton= screen.getByRole("button",{name:"Login"});  //2nd para when like there are multiple buttons
     fireEvent.click(loginButton);
     const logoutButton=screen.getByRole("button",{name:"Logout"});

    //Assert
    expect(loginButton).toBeInTheDocument();

});


