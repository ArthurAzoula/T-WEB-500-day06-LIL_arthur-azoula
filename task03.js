export function countGs(str) {
    let count = 0;
    for(let charactere of str) {
        if (charactere === 'G') {
            count++;
        }
    }
    return count;
}