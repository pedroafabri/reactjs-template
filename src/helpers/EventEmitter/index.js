export const EVENT_NAMES = {
  MODAL: 'modal'
}

export const EventEmitter = {
  events: new Map(),
  off: (eventName) => {
    EventEmitter.events.set(eventName, [])
    return EventEmitter
  },
  on: (eventName, cb) => {
    const events = EventEmitter.events.get(eventName) || []

    return EventEmitter.events.set(eventName, [...events, ...[cb]].flat())
  },
  emit: (eventName, ...data) => {
    const routines = EventEmitter.events.get(eventName) || []

    routines.map((fn) => fn(...data))
  }
}
