export function isPrime(num) {
  const total = Math.sqrt(num);
  let cnt;

  for (let index = 1; index <= total; i++) {
    if (total % index === 0) {
      cnt++;
    }
  }
  if (cnt === 2) {
    return true;
  } else {
    return false;
  }
}
