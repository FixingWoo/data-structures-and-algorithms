function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i; // 현재 인덱스를 최소값의 위치로 가정

    for (var j = i + 1; j < arr.length; j++) {
      // 현재 위치 이후의 요소들과 비교
      if (arr[lowest] > arr[j]) {
        // 더 작은 값을 찾으면 lowest 갱신
        lowest = j;
      }
    }

    if (i !== lowest) {
      // 최소값이 현재 위치와 다르면 교환
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

// ES2015 VERSION
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

selectionSort([0, 2, 34, 22, 10, 19, 17]);
