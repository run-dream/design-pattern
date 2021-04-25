import Observer from './observer'

export default class ObserverOne implements Observer{
    update(message: any): void {
       console.log('observerOne:', message)
    }
}