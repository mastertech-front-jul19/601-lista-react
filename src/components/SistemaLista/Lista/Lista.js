import React, { Component } from "react";

import "./Lista.scss";

class Lista extends Component {
    render() {
        return (
            <section className="Lista">
                <div className="item">
                    <p>TESTE</p>
                    <button>X</button>
                </div>
                <div className="item">
                    <p>TESTE</p>
                    <button>X</button>
                </div>
                <div className="item">
                    <p>TESTE</p>
                    <button>X</button>
                </div>
                <div className="item">
                    <p>TESTE</p>
                    <button>X</button>
                </div>
            </section>
        );
    }
}

export default Lista;