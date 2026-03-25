

const EventEmitter = require('events');

const emitter = new EventEmitter();

// listener (event handler)
emitter.on('greet', () => {
    console.log("Hello Abhi!");
});

// emit event
emitter.emit('greet');