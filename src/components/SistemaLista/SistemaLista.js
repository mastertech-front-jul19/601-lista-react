import React, { Component } from "react";
import Lista from "./Lista/Lista";

import "./SistemaLista.scss";

class SistemaLista extends Component {
    render() {
        return (
            <main className="SistemaLista">
                <Lista/>
            </main>
        )
    }
}

export default SistemaLista;