import { describe, expect, it } from 'vitest';
import {render, screen} from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

// describe('App', () => {
//   it('renders all screens without compile warnings', () => {
//     const { container } = render(<App />);
//     expect(container).toMatchSnapshot();
//   });
// });

const sum = (a: number, b: number) => a + b

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

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

// describe('Address Info', () => {
//   it('renders the address info screen', () => {
//     render(
//       <MemoryRouter initialEntries={['/address-info']}>
//         <Routes>
//           <Route path="/address-info" element={<AddressInfo />} />
//         </Routes>
//       </MemoryRouter>
//     );
//     expect(screen.getByText('Please enter your address to confirm your residency')).toBeVisible();
//   });
// });

// describe('Address Entry', () => {
//   it('renders the address entry screen', () => {
//     render(
//       <MemoryRouter initialEntries={['/address-entry']}>
//         <Routes>
//           <Route path="/address-entry" element={<AddressVerify />} />
//         </Routes>
//       </MemoryRouter>
//     );
//     expect(screen.getByText('Address')).toBeVisible();
//   });
// });

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