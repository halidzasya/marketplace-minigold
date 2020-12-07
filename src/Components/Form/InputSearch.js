import React from "react";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

const InputSearch = () => {
    return (

        <>
            <div className="form-control search">
                <MDBIcon icon="search mx-3" />
                <input class='in mx-1' type="text" placeholder="Cari Logam Mulia" aria-label="Search" />
            </div>

        </>
    );
}

export default InputSearch;