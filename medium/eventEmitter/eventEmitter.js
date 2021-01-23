
// Implement EventEmitter
class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, listener) {
      if (typeof this.events[event] !== 'object') {
          this.events[event] = [];
      }
      this.events[event].push(listener);
      return () => this.off(event, listener);
  }
  off(event, listener) {
    if (typeof this.events[event] === 'object') {
        const idx = this.events[event].indexOf(listener);
        if (idx > -1) {
          this.events[event].splice(idx, 1);
        }
    }
  }
  emit(event, ...args) {
    if (typeof this.events[event] === 'object') {
      this.events[event].forEach(listener => listener.apply(this, args));
    }
  }
  once(event, listener) {
    const remove = this.on(event, (...args) => {
        remove();
        listener.apply(this, args);
    });
  }
};
var eventEmitter = new EventEmitter();

function responseToEvent(msg) {
  console.log(msg);
}

eventEmitter.on('event', responseToEvent);
eventEmitter.once('event', function(msg) { console.log(msg + ' just once!'); }); // should print '1st just once' after '1st'
eventEmitter.emit('event', '1st');  // should print '1st'
eventEmitter.emit('event', '2nd');  // should print '2nd'
eventEmitter.off('event', responseToEvent);
eventEmitter.emit('event', '3rd');  //should not print anything
eventEmitter.on('event', responseToEvent);
eventEmitter.emit('event', '4rd');  // should print '4rd'