import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Timetable from './Timetable';

test('renders Timetables component without crashing', () => {
  render(<Timetable />);
});