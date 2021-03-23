import Algorithm from './algorithm'
export default class SelectionSort extends Algorithm {
    constructor(viewItems) {
        super(viewItems)
    }

    run = async (arr) => {
        const { toggleCheck, setDone, viewItems, toggleBest } = this;
        const len = arr.length;

        for (let i = 0; i < len; i++) {
            toggleCheck(i)
            toggleBest(0)
            let min = 1000;
            let indexOfMin = 0;
            for (let j = i; j < len; j++) {
                toggleCheck(j)
                await this.delay(1)
                if (arr[j] < min) {
                    toggleBest(indexOfMin)
                    min = arr[j];
                    indexOfMin = j;
                    toggleBest(indexOfMin)
                }
                toggleCheck(j)
            }
            [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
            [viewItems[i].style.height, viewItems[indexOfMin].style.height] = [viewItems[indexOfMin].style.height, viewItems[i].style.height];
            toggleBest(indexOfMin)
            setDone(i)
        }
    }
}