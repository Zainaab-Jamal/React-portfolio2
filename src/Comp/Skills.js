import React from "react";
import { Fragment } from "react";
import "./Skills.css";
class Skills extends React.Component {
    constructor() {

        console.log("CONSTRUCTOR SKILLS");
        super();


    }

    render() {
        
        let myCourse = [
            { corNmae: "css3", progress: 30 },
            { corNmae: "css", progress: 20 },
            { corNmae: "DB", progress: 40 },
            { corNmae: "UIUX", progress: 40 },
            { corNmae: "html5", progress: 90 },
            { corNmae: "Python", progress: 50 }
        ]
        let mystyle = {
            width: '30%',
            color: "white"
        }
        console.log("RENDER SKILLS");
        return (
            <Fragment>
                <div className="bg-dark text-white">
                    <div className="text-center">
                        <h2>Skills</h2>
                    </div>
                    <div className="row">
                        <div className="offset-2 col-8 text-center">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged. It was
                            </p>
                        </div>
                    </div>

                    <div className="row p-3">
                        <div className="offset-1 col-4 text-center">
                            <h4>My Focus</h4>
                            <hr/>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">First item</li>
                                <li className="list-group-item"> second item</li>
                                <li className="list-group-item"> third item</li>
                                <li className="list-group-item">fourth item</li>
                                <li className="list-group-item"> fifth item</li>
                            </ul>
                        </div>

                        <div className="col-7 ">
                            {myCourse.map((item) => {
                                return (
                                    <div className="progress mt-2 ">
                                        <div
                                            className="progress-bar bg-secondary"
                                            role="progressbar"
                                            style={{ width:`${item.progress}%` }}
                                            aria-valuenow={item.progress}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ><span>{item.corNmae}</span></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Skills