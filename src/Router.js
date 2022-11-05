import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
import antdTable from "./page/antdTable.js";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<antdTable/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;