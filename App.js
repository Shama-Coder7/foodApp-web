import React, { lazy, Suspense, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Error from './src/components/Error';
import RestaurantMenu from './src/components/RestaurantMenu';
import Form from './src/components/Form';
import Grocery from './src/components/Grocery';
import UserContext from './src/components/utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './src/components/utils/appStore';
import CartPage from './src/components/CartPage';


const App = () => {
  const [UserName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: 'ShaVeen',
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser: UserName, setUserName}}>
    <div>
      <Header />
      {/** if my path is / then i should have my about path here */}
      {/** if my path is /about then i should have my about path here */}
      {/** if my path is /contact then i should have my about path here */}
      <Outlet />
    </div>
    </UserContext.Provider>
    
    </Provider>
    
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<h2>About loading ......</h2>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: <Contact />,
      },

      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>Groceries Loading......</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: '/form',
        element: <Form />,
      },
      {
        path: '/cartpage',
        element: <CartPage/>,
      },
      {
        path: '/restaurants/:resId', //resId is dynamic here.
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
