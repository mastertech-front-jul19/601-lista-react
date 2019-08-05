import React, { Component } from "react";

import "./SistemaLista.scss";

import Lista from "./Lista/Lista";
import EditarLista from "./EditarItem/EditarItem";
import Historico from "./Historico/Historico";

class SistemaLista extends Component {
    render() {
        return (
            <main className="SistemaLista">
                <Lista />
                <EditarLista />
                <Historico />
            </main>
        )
    }
}

export default SistemaLista;