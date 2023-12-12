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

  // Check if there are multiple elements with the text "FUTURE SPORTS"
  const futureSportsLinks = screen.getAllByText('FUTURE SPORTS');
  expect(futureSportsLinks.length).toBeGreaterThan(1);

  // Check if the menu icon is initially visible
  const menuIcon = screen.getByTestId('menu-icon');
  expect(menuIcon).toBeTruthy();

  // Check if clicking the menu icon toggles the navigation menu
  fireEvent.click(menuIcon);

  // Check if the navigation menu is now visible
  const navigationMenu = screen.getByTestId('navigation-menu');
  expect(navigationMenu).toBeTruthy();

  // You can add more assertions or interactions as needed
});
