export default class Algorithm {
    constructor() {
        this.viewItems = document.getElementById("visualizer").children
    }

    /**
     * Stops function execution for Nº of ms to let the page update the DOM
     * @param ms Miliseconds to stop
     * @default ms = 1
     */
    delay = (ms = 1) => new Promise(res => setTimeout(res, ms));
    
    toggleCheck = i => this.viewItems[i].classList.toggle('checking');

    toggleBest = i => this.viewItems[i].classList.toggle('best')
    
    setDone = i => this.viewItems[i].classList.add('sorted');

    run = () => console.log("The run function for this algorithm hasn't been defined");
}