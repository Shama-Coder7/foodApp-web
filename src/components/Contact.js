import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        />
        <button className="border border-black p-2 m-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

// import { useState, useRef } from 'react';

// const Contact = () => {
//   const [isTheme, setIsTheme] = useState(false);
//   let x = 0;
//   const [Y, setY] = useState(0);

//   const Z = useRef(0);

//   return (
//     <div
//       className={
//         'm-4 p-2 w-96 h-auto border border-black' +
//         (isTheme && 'bg-gray-900 text-white')
//       }
//     >
//       <div>
//         <button
//           className="m-10 p-2 bg-green-200"
//           onClick={() => setIsTheme(!isTheme)}
//         >
//           Change Theme
//         </button>
//       </div>
//       <div className="d-flex">
//         <button
//           className="m-10 p-2 bg-green-200"
//           onClick={() => {
//             x = x + 1;
//             console.log('x=', x);
//           }}
//         >
//           Increase X
//         </button>
//         <span className="font-bold text-xl">let x = {x}</span>
//       </div>

//       <div className="d-flex">
//         <button
//           className="m-10 p-2 bg-green-200"
//           onClick={() => {
//             setY(Y + 1);
//             console.log('Y=', Y);
//           }}
//         >
//           Increase Y
//         </button>
//         <span className="font-bold text-xl">State = {Y}</span>
//       </div>
//       <div className="d-flex">
//         <button
//           className="m-10 p-2 bg-green-200"
//           onClick={() => {
//             Z.current = Z.current + 1;
//             console.log('ref=', Z.current);
//           }}
//         >
//           Increase Y
//         </button>
//         <span className="font-bold text-xl">Ref = {Z.current}</span>
//       </div>
//     </div>
//   );
// };

// export default Contact;
