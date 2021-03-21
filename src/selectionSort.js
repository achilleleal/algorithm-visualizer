import Algorithm from './algorithm'
export default class SelectionSort extends Algorithm {
    constructor(viewItems) {
        super(viewItems)
    }

    run = async (arr) => {
        const { toggleCheck, setDone, viewItems } = this;
        const len = arr.length;

        for (let i = 0; i < len; i++) {
            toggleCheck(i)
            let min = 10000;
            let indexOfMin;
            for (let j = i; j < len; j++) {
                if (arr[j] < min) {
                    toggleCheck(indexOfMin || 0)
                    min = arr[j];
                    indexOfMin = j;
                    toggleCheck(indexOfMin || 0)
                }
            }
            [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
            [viewItems[i].style.height, viewItems[indexOfMin].style.height] = [viewItems[indexOfMin].style.height, viewItems[i].style.height];
            await this.delay(10);
            toggleCheck(indexOfMin)
            setDone(i)
        }
    }
}