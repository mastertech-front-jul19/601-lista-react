import React, { Component } from "react";

import "./EditarItem.scss";

class EditarItem extends Component {
    render() {
        return (
            <section className="EditarItem">
                <div>
                    <label>Conteúdo</label>
                    <input type="text" />
                </div>
                <div>
                    <button>Atualizar</button>
                </div>
            </section>
        );
    }
}

export default EditarItem;