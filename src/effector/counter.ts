import { createStore, createEvent } from "effector";

type Counter = number;

const counterStore = createStore<Counter>(0);

export const add = createEvent<Counter>();
export const sub = createEvent<Counter>();
const update = createEvent<Counter>();
const reset = createEvent<null>();

counterStore
  .on(add, (state: Counter, payload: Counter) => state + payload)
  .on(sub, (state: Counter, payload: Counter) => state - payload)
  .on(update, (_, payload: Counter) => payload)
  .reset(reset)
  .watch((state) => console.log("Change counter: ", state));

export default counterStore;
