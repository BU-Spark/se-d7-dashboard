import { describe, expect, it } from 'vitest';
import {render, screen} from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Login from '../screens/login/Login';
import Register from '../screens/register/ContactInfo';
import Home from '../screens/Home';
import AddressInfo from '../screens/adressInfo/AdressInfo';
import AddressVerify from '../screens/addressVerify/AddressVerify';
import Profile from '../screens/Profile';
import Interests from '../screens/Interests';

describe('App', () => {
  it('renders all screens without compile warnings', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});

// describe('Login', () => {
//   it('renders the login screen', () => {
//     render(
//       <MemoryRouter initialEntries={['/login']}>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </MemoryRouter>
//     );
//     expect(screen.getByText('Don’t have an account?')).toBeVisible();
//   });
// });

// describe('Register', () => {
//   it('renders the sign up screen', () => {
//     render(
//       <MemoryRouter initialEntries={['/signup']}>
//         <Routes>
//           <Route path="/signup" element={<Register />} />
//         </Routes>
//       </MemoryRouter>
//     );
//     expect(screen.getByText('Sign Up')).toBeVisible();
//   });
// });

describe('Address Info', () => {
  it('renders the address info screen', () => {
    render(
      <MemoryRouter initialEntries={['/address-info']}>
        <Routes>
          <Route path="/address-info" element={<AddressInfo />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Please enter your address to confirm your residency')).toBeVisible();
  });
});

describe('Address Entry', () => {
  it('renders the address entry screen', () => {
    render(
      <MemoryRouter initialEntries={['/address-entry']}>
        <Routes>
          <Route path="/address-entry" element={<AddressVerify />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Enter your address')).toBeVisible();
  });
});

// describe('Profile', () => {
//   it('renders the profile screen', () => {
//     render(
//       <MemoryRouter initialEntries={['/profile']}>
//         <Routes>
//           <Route path="/profile" element={<Profile />} />
//         </Routes>
//       </MemoryRouter>
//     );
//     expect(screen.getByText('Build Your User Profile')).toBeVisible();
//   });
// });

// describe('Interests', () => {
//   it('renders the interests screen', () => {
//     render(
//       <MemoryRouter initialEntries={['/interests']}>
//         <Routes>
//           <Route path="/interests" element={<Interests />} />
//         </Routes>
//       </MemoryRouter>
//     );
//     expect(screen.getByText('Help Us Understand Your Interests')).toBeVisible();
//   });
// });