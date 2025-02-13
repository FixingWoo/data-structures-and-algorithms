function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivot = arr[start]; // 첫 번째 요소를 기준 값(pivot)으로 설정
  let swapIdx = start; // pivot보다 작은 값을 찾았을 때 스왑할 위치

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      // 현재 값이 pivot보다 작다면
      swapIdx++; // swapIdx를 증가시키고
      swap(arr, swapIdx, i); // 작은 값과 swap
    }
  }

  swap(arr, start, swapIdx); // pivot을 최종 위치로 이동
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); // pivot을 기준으로 배열을 분할
    quickSort(arr, left, pivotIndex - 1); // 왼쪽 부분 배열 정렬
    quickSort(arr, pivotIndex + 1, right); // 오른쪽 부분 배열 정렬
  }
  return arr;
}
