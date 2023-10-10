import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import appStore from '../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

it('Should render Header Component with a login button', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const loginButton = screen.getByRole("button");
  const loginButton = screen.getByRole('button', { name: 'Login' }); // for multiple buttons

  //   const loginButton = screen.getByText('button');

  expect(loginButton).toBeInTheDocument();
});

// it('Should render Header Component with a Cart item', () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   const cartItems = screen.getByText(/Cart/); 

//   expect(cartItems).toBeInTheDocument();
// });



it('Should change Login button to Logout on click', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole('button', { name: 'Login' }); 

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole('button', { name: 'Logout' }); 


  expect(logoutButton).toBeInTheDocument();
});