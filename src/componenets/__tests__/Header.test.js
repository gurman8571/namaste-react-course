import Header from "../Header"
import {render} from "@testing-library/react"
import { StaticRouter } from "react-router-dom/server"//for usimg links type thig as jsdom is not a browser 

test('LOGO SHOULD LOAD ON RENDERING HEADER', () => {
//LOAD HEADER
 
const header=render(
    <StaticRouter>
    <Header/>
    </StaticRouter>
    )
const logo=header.getByTestId("logo");
console.log(logo);


//CHEck logo is loaded or not
})
