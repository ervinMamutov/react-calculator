import './App.css';
import Card from './components/Card';
import Screen from './components/Screen';
import Button from './components/Button';
import { useState } from 'react';
import data from './data/data';
import { evaluate, sqrt, round } from 'mathjs';

const App = () => {
  const [value, setValue] = useState('');
  const [count, setCount] = useState(0);

  const clickHandler = (btn) => {
    if (btn === '=') {
      setValue((previousValue) => round(evaluate(previousValue), 4));
    } else if (btn === 'AC') {
      setValue('');
    } else if (btn === '±') {
      setValue((previousValue) => '-' + previousValue);
    } else if (btn === '√') {
      setValue((previousValue) => round(sqrt(previousValue), 4));
    } else if (btn === 'Pi') {
      setValue((previousValue) => previousValue + '3.1415');
    } else {
      setValue((previousValue) => previousValue + btn);
    }
    setCount((previousCount) => previousCount + 1);
  };

  return (
    <Card>
      <h1>React Calculator</h1>
      <Screen value={value} />
      <div className="btn-container">
        {data.map((row) => (
          <div key={row} className={`row ${count}`}>
            {row.map((btn) => (
              <Button
                key={btn}
                text={btn}
                style="btn"
                clickHandler={() => clickHandler(btn)}
              />
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
};
export default App;
