import React, { Component } from 'react'
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie'

import '../css/Login.css'
import 'bootstrap/dist/css/bootstrap.css'

const users_url = "http://localhost:3001/users";
const cookies = new Cookies();

export default class Menu extends Component {

    logOut = async () => {
        cookies.remove('id', { path: '/' });
        cookies.remove('l_name', { path: '/' });
        cookies.remove('sl_name', { path: '/' });
        cookies.remove('name', { path: '/' });
        cookies.remove('username', { path: '/' });
        window.location.href = "./";
    }

    componentDidMount = () => {
        if (!cookies.get('id')) {
            window.location.href = "./";
        }
    }

    render() {
        return (

            <div className="app-container">
                <div className="container">
                    <div className="form-group">
                        <label
                            className="form-label"
                            data-testid="username">
                            username: {cookies.get('username')}
                        </label>

                        <p
                            data-testid="id">
                            id: {cookies.get('id')}
                        </p>

                        <p
                            data-testid="last-name">
                            apellido_p: {cookies.get('l_name')}
                        </p>

                        <p
                            data-testid="second-last-name">
                            apellido_m: {cookies.get('sl_name')}
                        </p>

                        <p
                            data-testid="name">
                            nombre: {cookies.get('name')}
                        </p>

                        <br />

                        <button

                            className="btn btn-danger"
                            onClick={this.logOut}
                        >LogOut
                        </button>

                    </div>

                </div>

            </div>
        )
    }
}


