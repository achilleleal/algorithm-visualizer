export default class Algorithm {
    constructor(viewItems) {
        this.viewItems = viewItems
        this.isRunning = false
    }

    delay = ms => new Promise(res => setTimeout(res, ms));
    
    toggleCheck = i => this.viewItems[i].classList.toggle('checking');
    
    setDone = i => this.viewItems[i].classList.add('sorted');
}