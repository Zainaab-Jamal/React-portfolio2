import React from "react";
import "./Portfolio.css"
import { Fragment } from "react";
class Portfolio extends React.Component {


    constructor() {
        console.log("CONSTRUCTOR ABOUTUS");
        super();
    }

    render() {
        let cards = [
            { cardTitle: "WEB", color: "#e9ecef" },
            { cardTitle: "Mobile", color: "#6c757d" },
            { cardTitle: "UI/UX Design", color: "#e9ecef" },
            { cardTitle: "Web App", color: "#6c757d" },
            { cardTitle: "Mobile App", color: "#e9ecef" },
            { cardTitle: "Testing", color: "#6c757d" },
        ];
        console.log("RENDER ABOUTUS");
        return (
            <Fragment>
                <h3 className="offset-1 p-3 text-start"> Portfolio</h3>
                <div className="container portcards">
                    {cards.map((item) => {
                        return (
                            
                                <div className="col-3 m-3" style={{ "background-color" :`${item.color}` }}>
                                    <div className="card h-100" style={{ "background-color" :`${item.color}` }}>
                                        <div className="card-body"style={{ "background-color" :`${item.color}` }} >
                                            <h5 className="card-title">{item.cardTitle}</h5>
                                            <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio</p>
                                        </div>
                                    </div>
                                </div>
                            
                        );
                    })}

                </div>
            </Fragment>
        );
    }
}

export default Portfolio;