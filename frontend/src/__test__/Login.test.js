import ReactDOM from "react-dom";
import React from 'react'
import { render, screen, cleanup } from '@testing-library/react';

import Login from '../views/Login';

afterEach(() => {
  cleanup();
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login user='Usuario' passwd='contraseña'></Login>, div);
});

test('renders username components correctly', () => {
  render(<Login user='Usuario'></Login>);

  const label_username = screen.getByTestId('LUName');
  expect(label_username).toBeInTheDocument();
  expect(label_username).toHaveTextContent('username');

  const username = screen.getByTestId('UName');
  expect(username).toBeInTheDocument();
  expect(username).toHaveValue('Usuario');

});

test('renders password components correctly', () => {
  render(<Login passwd='Contraseña'></Login>);

  const label_passwd = screen.getByTestId('LPasswd');
  expect(label_passwd).toBeInTheDocument();
  expect(label_passwd).toHaveTextContent('password');

  const passwd = screen.getByTestId('Passwd');
  expect(passwd).toBeInTheDocument();
  expect(passwd).toHaveValue('Contraseña');

});

test('renders button component correctly', () => {
  render(<Login send='Login'></Login>);
  const send = screen.getByTestId('send');
  expect(send).toBeInTheDocument();
  expect(send).toHaveTextContent('Login');

});

