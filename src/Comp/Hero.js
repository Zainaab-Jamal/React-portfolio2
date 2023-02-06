import React from "react";
import './Hero.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from "react";


class HeroSection extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Fragment>
                <div className="">
                    <div className="card bg-dark text-white">
                        <img
                            className="card-img"
                            src="/home/zainab/react1/src/Imgs/82173712-blog-or-website-hero-with-beige-and-red-roses-eucalyptus-leaf-on-pale-pastel-beige-background-flat-l.webp"
                            alt="Hero image"
                        ></img>
                        <div className="card-img-overlay text-center col-3 ms-5 ">
                            <h1 className="card-title  ">Zainab Gamal</h1>
                            <p className="card-text ">
                                full stack web developer
                            </p>
                            <button className="btn btn-dark btn-lg card-text">Contact Me</button>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default HeroSection;