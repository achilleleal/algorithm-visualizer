import Algorithm from './algorithm'
 
const SelectionSort = new Algorithm()

SelectionSort.run = async (arr) => {
    const { toggleCheck, setDone, viewItems, toggleBest, delay } = SelectionSort;
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        toggleCheck(i)
        toggleBest(0)
        let min = 1000;
        let indexOfMin = 0;
        for (let j = i; j < len; j++) {
            toggleCheck(j)
            await delay()
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

export default SelectionSort