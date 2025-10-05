export type EventWithTarget<T extends Element> = Event & { target: T }
export type InputElmEvent = EventWithTarget<HTMLInputElement>