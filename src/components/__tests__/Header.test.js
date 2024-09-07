import Header from "../Header";
import appstore from "../../utils/appstore"
import {fireEvent, render,screen} from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { FaCartShopping } from "react-icons/fa6";

test("should load header componenet with login button",()=>
{
    render(
    <BrowserRouter>
    <Provider store={appstore}>
    <Header/>;
    </Provider>
    </BrowserRouter>
    );

    const loginbutton=screen.getByRole("button",{name:"Login"});

    expect(loginbutton).toBeInTheDocument();
});

test("should load header componenet with login button",()=>
{
    render(
    <BrowserRouter>
    <Provider store={appstore}>
    <Header/>;
    </Provider>
    </BrowserRouter>
    );

    const loginbutton = screen.getByRole("button", { name: "Login" });
    
    fireEvent.click(loginbutton);

    const logoutbutton = screen.getByRole("button", { name: "Logout" });

    expect(logoutbutton).toBeInTheDocument();
});



