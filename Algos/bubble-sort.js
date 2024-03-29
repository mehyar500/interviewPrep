/**
 * The bubble sort method 
 * starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end, 
 * iterating through the array until it is completely sorted
 * It does this by comparing adjacent items and swapping them if they are out of order. 
 * The method continues looping through the array until no swaps occur at which point the array is sorted.
 */

function swap(a, b, arr) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }
  function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        // -i because the largest element will be bubbled at the end so we don't have to compare.
        if (array[j] > array[j + 1]) {
          swap(j, j + 1, array);
        }
      }
    }
    return array;
  }