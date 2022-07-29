import { useStore } from "effector-react";
import counterStore, { add, sub } from "../effector/counter";
import './counter.scss'
const Counter = ({ children }: any) => {
  return <div style={styles.container}>{children}</div>;
};

const Increment = () => {
  return (
    <button style={styles.button} onClick={() => add(1)}>
      +
    </button>
  );
};

const Decrement = () => {
  return (
    <button style={styles.button} onClick={() => sub(1)}>
      -
    </button>
  );
};

const Label = () => {
  const counter = useStore(counterStore)
  return (
    <div style={styles.label}>
      <span>{counter}</span>
    </div>
  )
}

Counter.Increment = Increment;
Counter.Decrement = Decrement;
Counter.Label = Label;

function CounterPage() {
  return (
    <>
    <div className="container">
      <h2 className="title">Counter</h2>
      <Counter>
        <Counter.Increment />
        <Counter.Label />
        <Counter.Decrement />
        
      </Counter>
      </div>
    </>
  );
}

export default CounterPage;

const styles = {
  container: {
    display: "flex",
    backgroundColor: "white",
    borderWidth: "3px",
    border: "3px solid #fc9003",
  },
  button: {
    border: "none",
    backgroundColor: "white",
    color: "#fc9003",
    padding: "0.5rem 1rem",
    fontSize: "2rem",
    cursor: "pointer",
  },
  label: {
    backgroundColor: '#fc9003',
    color: 'white',
    fontSize: '2rem',
    width: '100px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'stretch'
  }
};
