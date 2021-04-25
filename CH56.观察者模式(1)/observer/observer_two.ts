import Observer from './observer'

export default class ObserverTwo implements Observer{
    update(message: any): void {
       console.log('observerTwo', message)
    }
}