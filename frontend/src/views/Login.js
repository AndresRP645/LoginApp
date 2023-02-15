import React, { Component } from 'react'
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie'

import '../css/Login.css'
import 'bootstrap/dist/css/bootstrap.css'

const users_url = "http://localhost:3001/users";
const cookies = new Cookies();

export default class Login extends Component {

    state = {
        form: {
            username: '',
            password: ''
        }

    }

    componentDidMount = () => {
        if (cookies.get('id')) {
            window.location.href = "./menu";
        }
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form, [e.target.name]: e.target.value
            }
        });
    }

    logIn = async () => {
        await axios.get(users_url, {
            params: {
                username: this.state.form.username,
                password: md5(this.state.form.password)
            }
        })
            .then(res => {
                return res.data;
            })
            .then(res => {
                if (res.length > 0) {
                    var data = res[0];
                    cookies.set('id', data.id, { path: '/' });
                    cookies.set('l_name', data.l_name, { path: '/' });
                    cookies.set('sl_name', data.sl_name, { path: '/' });
                    cookies.set('name', data.name, { path: '/' });
                    cookies.set('username', data.username, { path: '/' });

                    alert(`Bienvenido ${data.name} ${data.l_name}`);
                    window.location.href = "./menu";

                } else {
                    alert('Introduce un usuario y/o contraseña validos');
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (

            <div className="app-container">
                <div className="container">
                    <div className="form-group">
                        <label
                            className="form-label"
                            data-testid="LUName"
                        >username</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            onChange={this.handleChange}
                            data-testid="UName"
                            placeholder="user"
                        />


                        <br />

                        <label
                            className="form-label"
                            data-testid="LPasswd"
                        >password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.handleChange}
                            data-testid="Passwd"
                            placeholder="password"
                        />

                        <br />

                        <button
                            className="btn btn-success"
                            data-testid="send"
                            onClick={this.logIn}
                        >Login
                        </button>

                    </div>

                </div>

            </div>
        )
    }
}


