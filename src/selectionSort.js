const delay = ms => new Promise(res => setTimeout(res, ms));

export default async function selectionSort(arr, viewItems) {
    const toggleCheck = i => viewItems[i].classList.toggle('checking')
    const toggleDone = i => viewItems[i].classList.toggle('sorted')
    
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
        await delay(10);
        toggleCheck(indexOfMin)
        toggleDone(i)
    }
    console.log(arr)
}