import Observer from './observer'
import Message from './message'

export default interface Subject {
    registerObserver(observer: Observer): void
    removeObserver(observer: Observer): void
    notifyObservers(message: Message): void
  }
  