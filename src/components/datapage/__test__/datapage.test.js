import {render,screen} from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter, Link } from "react-router-dom"
import { store } from "../../../Redux/store"
import Datapage from "../Datapage.component"



const MockDataPage = ()=>{
    <BrowserRouter>
    <Provider store={store}>
        <Datapage/>
    </Provider>
    </BrowserRouter>
}


it("has a link to back",()=>{
   
})