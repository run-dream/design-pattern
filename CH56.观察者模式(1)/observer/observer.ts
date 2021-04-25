import Message from './message'

export default interface Observer{
    update(message: Message): void
}