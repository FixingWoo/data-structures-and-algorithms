function insertionSort(arr) {
  var currentVal;

  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i]; // 현재 값을 저장
    var j = i - 1;

    while (j >= 0 && arr[j] > currentVal) {
      // 현재 값보다 큰 값들은 오른쪽으로 이동
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentVal; // 현재 값을 올바른 위치에 삽입
  }
  return arr;
}

insertionSort([133, 2, 41, 96, 1]);
