import React, { Component } from 'react'
import react from '../img/react.png'
import angular from '../img/angular.png'
import python from '../img/python.png'
import nest from '../img/nest.svg'
import laravel from '../img/laravel.png'
export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron bg-light">
                    <h1 className="display-4">Bienvenidos a mi portafolio, Mi nombre es Samuel David</h1>
                    <p className="lead">Soy una persona que siempre busca mejorar, me gusta ser competente, trabajar en equipo y ser autodidacta</p>
                    <p className="lead">Amplios conocimientos en react, redux, hooks, etc.</p>
                    
                    <hr className="my-4" />
                    <p>Mi repositorio es <a href="https://github.com/ConDish?tab=repositories" target="_blank">repositories</a></p>
                    <p>Codigo del portafolio <a href="https://github.com/ConDish/porfolio" target="_blank">code</a></p>

                </div>

                <div className="jumbotron bg-light">

                    <h1 className="display-4">Mis fuertes</h1>
                    <div className="mt-5">

                        <img className="mr-5" src={react} style={{ height: 130, width: 130 }} />
                        <img src={angular} className="mr-5" style={{ height: 130, width: 130 }} />
                        <img src={python} className="mr-5" style={{ height: 130, width: 130 }} />
                        <img src={nest} className="mr-5" style={{ height: 130, width: 130 }} />
                        <img src={laravel} style={{ height: 130, width: 130 }} />

                    </div>

                </div>

                <div className="jumbotron bg-light">

                    <h1 className="display-4">Proyectos</h1>
                    <div className="mt-5">

                        <a href="https://task-useit.herokuapp.com" target="_blank" className="lead">https://task-useit.herokuapp.com</a>

                    </div>

                </div>

            </div>
        )
    }
}
