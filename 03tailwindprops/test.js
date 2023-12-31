// import EventEmitter from Node

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Define an event handler function
const myEventHandler = (data) => {
  console.log('Event triggered with data:', data);
};

// Attach the event handler to the 'myEvent' event
myEmitter.on('myEvent', myEventHandler);

// Emit the 'myEvent' event with some data
myEmitter.emit('myEvent', 'Hello, world!');
console.log("Event occured")