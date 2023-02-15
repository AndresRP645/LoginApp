import ReactDOM from "react-dom";
import React from 'react'
import { render, screen, cleanup } from '@testing-library/react';
import Cookies from 'universal-cookie'

import Login from '../views/Menu';
import Menu from "../views/Menu";

const cookies = new Cookies();

beforeEach(() => {
    cookies.set('id', '1');
    cookies.set('l_name', 'rosales');
    cookies.set('sl_name', 'paredes');
    cookies.set('name', 'andres');
    cookies.set('username', 'arosalesp645');
});

afterEach(() => {
    cookies.remove('id');
    cookies.remove('l_name');
    cookies.remove('sl_name');
    cookies.remove('name');
    cookies.remove('username');
    cleanup();
});

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Menu></Menu>, div);
});

test('renders id components correctly', () => {

    render(<Menu></Menu>);

    const id = screen.getByTestId('id');
    expect(id).toBeInTheDocument();
    expect(id).toHaveTextContent('1');

});

test('renders last name components correctly', () => {
    render(<Menu></Menu>);

    const l_name = screen.getByTestId('last-name');
    expect(l_name).toBeInTheDocument();
    expect(l_name).toHaveTextContent('rosales');

});

test('renders second last name components correctly', () => {
    render(<Menu></Menu>);

    const sl_name = screen.getByTestId('second-last-name');
    expect(sl_name).toBeInTheDocument();
    expect(sl_name).toHaveTextContent('paredes');

});

test('renders name components correctly', () => {
    render(<Menu></Menu>);

    const name = screen.getByTestId('name');
    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent('andres');

});

test('renders username components correctly', () => {
    render(<Menu></Menu>);

    const l_name = screen.getByTestId('username');
    expect(l_name).toBeInTheDocument();
    expect(l_name).toHaveTextContent('arosalesp645');

});