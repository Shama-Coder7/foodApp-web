import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import RestaurantMenu from '../RestaurantMenu';
import Header from '../Header';
import CartPage from '../CartPage';
import MOCK_DATA_NAME from '../mocks/MockRestaurantMenuData.json';
import appStore from '../utils/appStore';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  });
});

it('should load Restaurant menu component', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <CartPage />
        </Provider>
      </BrowserRouter>
    );

    const accordionHeader = screen.getByText('Mocktails (12)');
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId('foodItems').length).toBe(12);

    expect(screen.getByText('0')).toBeInTheDocument(); // this will also work with value 0 bcz the value is 0 before clicking the add button button

    const addButtons = screen.getAllByRole('button', { name: 'Add +' });

    console.log(addButtons.length, 'length');

    fireEvent.click(addButtons[0]);

    expect(screen.getByText('1')).toBeInTheDocument(); // it will pass bcz it is after clicking add button
    fireEvent.click(addButtons[1]);

    expect(screen.getByText('2')).toBeInTheDocument();
    fireEvent.click(addButtons[2]);

    expect(screen.getByTestId("foodItems").length).toBe(12)

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

    expect(screen.getAllByTestId("foodItems").length).toBe(12);

    expect(screen.getByText("Your Cart is Empty. Order Now"))
  });
});
