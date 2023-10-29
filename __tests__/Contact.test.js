import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

describe('Contact us Page Test Cases', () => {
  // beforeAll(() => {
  //   console.log('Before All');
  // });

  // beforeEach(() => {
  //   console.log('Before Each');
  // });

  // afterAll(() => {
  //   console.log('After All');
  // });

  // afterEach(() => {
  //   console.log('After Each');
  // });
  it('Should load contact us component', () => {
    render(<Contact />);

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
  });

  it('Should load button inside Contact component', () => {
    render(<Contact />);

    const button = screen.getByText('Submit');

    expect(button).toBeInTheDocument();
  });

  it('Should load input inside Contact component', () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText('name');

    expect(input).toBeInTheDocument();
  });

  it('Should load 2 input boxes Contact component', () => {
    render(<Contact />);

    // Querying

    const inputBoxes = screen.getAllByRole('textbox');

    // console.log(inputBoxes[0]);  // it is a react element [jsx part]

    // assertion
    expect(inputBoxes.length).toBe(2);
  });
});
