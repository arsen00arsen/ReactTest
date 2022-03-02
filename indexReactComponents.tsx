

let arr = [12, 30, 45, 9, 3, 15, 2, 8];
let count = 0;

function sort(list, index) {
    let item;
    if ((list.length - index) > 1) {
        for (let i = 0; i < list.length - index; i++) {
            if (list[0] < list[i]) {
                item = list[0];
                list[0] = list[i];
                list[i] = item;
            }
        }
    }
    count++;
    item = list[0];
    list[0] = list[list.length - count];
    list[list.length - count] = item;
    if (count !== list.length) {
        sort(list, count)
    }
    return list;
}

console.log(sort(arr, count));