export default class Algorithm {
    constructor() {
        this.viewItems = document.getElementById("visualizer").children
    }

    delay = ms => new Promise(res => setTimeout(res, ms));
    
    toggleCheck = i => this.viewItems[i].classList.toggle('checking');

    toggleBest = i => this.viewItems[i].classList.toggle('best')
    
    setDone = i => this.viewItems[i].classList.add('sorted');
}