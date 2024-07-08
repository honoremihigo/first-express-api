function binarySearch(a,n,item) {
    let beg = 0;
    let end = n-1;
    let mid;
    let loc=-1;
    while (beg<=end) {
        mid = Math.floor((beg+end)/2);
        if (a[mid]=== item) {
            loc = mid;
            break;
        }else if (item <a[mid]) {
            end = mid-1
        }
        else{
            beg= mid+1
        }
    }
    return loc
}

let array = [19,25,30,40,60,70,100,105,115]
let num = array.length
let items = 100;

let loc = binarySearch(array,num,items)

if (loc !== -1) {
    console.log(`item ${items} found at index ${loc}`)
}
else{
    console.log(`item ${items} not found in the array`);
}