import Algorithm from './algorithm'

export default class BubbleSort extends Algorithm {
    constructor(viewItems) {
        super(viewItems)
    }

    run = async (arr) => {
        const { toggleCheck, viewItems, delay } = this;

        let didChange = true;

        while (didChange) {
            didChange = false
            for (let i = 0; i < arr.length; i++) {
                if (arr[i+1] < arr[i]) {
                    toggleCheck(i)
                    didChange = true;
                    await delay(1);
                    [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                    [viewItems[i].style.height, viewItems[i+1].style.height] = [viewItems[i+1].style.height, viewItems[i].style.height];
                    toggleCheck(i)
                }
            }
        }
        console.log(arr)
    }
}