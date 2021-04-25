import ConcreteSubject from './concrete_subject'
import ObserverOne from './observer_one'
import ObserverTwo from './observer_two';

const subject = new ConcreteSubject()
subject.registerObserver(new ObserverOne())
subject.registerObserver(new ObserverTwo())

subject.notifyObservers('wake me up when September ends')