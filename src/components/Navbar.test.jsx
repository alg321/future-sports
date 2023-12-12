import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

test('Navbar renders correctly and toggles navigation', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  const futureSportsLinks = screen.getAllByText('FUTURE SPORTS');
  expect(futureSportsLinks.length).toBeGreaterThan(1);

  const menuIcon = screen.getByTestId('menu-icon');
  expect(menuIcon).toBeTruthy();

  fireEvent.click(menuIcon);

  const navigationMenu = screen.getByTestId('navigation-menu');
  expect(navigationMenu).toBeTruthy();


});
