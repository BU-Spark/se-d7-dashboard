import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';

describe('App', () => {
  it('renders all screens without compile warnings', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});

describe('Login', () => {
  it('renders the login screen', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Don’t have an account?')).toBeInTheDocument();
  });
});

describe('Register', () => {
  it('renders the sign up screen', () => {
    render(
      <MemoryRouter initialEntries={['/signup']}>
        <Routes>
          <Route path="/signup" element={<Register />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });
});
