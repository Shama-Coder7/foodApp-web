import React, { useState } from 'react';

const Form = () => {
  // return (
  //   <div>
  //     <form className="flex inverted-colors:outline ...">
  //       <input className="optional:border-gray-300 ..." />
  //       <button className="bg-blue-500 hocus:bg-blue-600">...</button>
  //     </form>
  //   </div>
  // );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [user, setUser] = useState(null); // For authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional actions with the form data here.
    console.log(formData);
  };

  const handleLogin = () => {
    // Simulate a login action. In a real application, this will be replaced by actual authentication.
    setUser({ username: 'example_user' });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Simulate a logout action. In a real application, this will be replaced by actual authentication.
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-lg">
        {isLoggedIn ? (
          <>
            <h1 className="text-2xl font-bold mb-4">Contact Form</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </form>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white mt-4 py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Login to Access the Form
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
