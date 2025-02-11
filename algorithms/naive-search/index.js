function naiveSearch(long, short) {
  // short 문자열이 long 문자열에 등장한 횟수를 기록하는 변수
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;

      // j가 short.length - 1일 때, 즉 short 문자열의 마지막 문자까지 모두 일치하면 count += 1.
      if (j === short.length - 1) count++;
    }
  }
  return count;
}
