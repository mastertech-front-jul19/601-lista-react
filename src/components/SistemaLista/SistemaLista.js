import React, { Component } from "react";

import "./SistemaLista.scss";

import Lista from "./Lista/Lista";
import EditarLista from "./EditarItem/EditarItem";

class SistemaLista extends Component {
    render() {
        return (
            <main className="SistemaLista">
                <Lista />
                <EditarLista />
            </main>
        )
    }
}

export default SistemaLista;