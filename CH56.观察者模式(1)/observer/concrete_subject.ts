import Observer from './observer'
import Subject  from './subject'

export default class ConcreteSubject implements Subject{
    observers: Observer[]

    constructor(){
        this.observers = new Array<Observer>()
    }
    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }
    removeObserver(observer: Observer): void {
        const index = this.observers.findIndex(item=>item === observer);
        this.observers.splice(index, 1)
    }
    notifyObservers(message: any): void {
        for(const observer of this.observers){
            observer.update(message)
        }
    }
}