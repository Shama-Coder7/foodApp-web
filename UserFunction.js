import { useEffect, useState } from 'react';

const UserFunction = (props) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
   timer= setInterval(() => {
      console.log('I am UseEffect Interval');
    },1000);

    return() =>{
      clearInterval(timer);
      console.log("useEffect unmount")
    }
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Count: {count2}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <h3>{props.name} Function</h3>
      {/* If we pass direct name instead of props then this will work. */}
      {/* ({name}) */}
      {/* <h3>{name}</h3> */}
      <p>{props.position}</p>
      <p>MCA Student</p>
    </div>
  );
};

export default UserFunction;
