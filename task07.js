export function arrayFiltering(array, test) {
    let arrayFilter = [];
    for (let i = 0; i < array.length; i++) {
        if (test(array[i])) {
            arrayFilter.push(array[i]);
        }
    }
    return arrayFilter;

}