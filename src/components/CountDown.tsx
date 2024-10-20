import { useEffect, useState } from 'react';
import '@scss/_CountDown.scss';

const CountDown = () => {
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    console.log('yo');
    if (number > 0) {
      let timer = setInterval(() => {
        console.log('cumple la condicion');
        setNumber((number) => number - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [number]);

  return (
    <section className="count-down">
      <h2>CountDown Component</h2>
      <h3>{number}</h3>

      <input
        type="text"
        value={number}
        placeholder="digita segundos de la cuenta regresiva"
        onChange={(e) => setNumber(Number(e.target.value))}
      />
    </section>
  );
};

export default CountDown;
