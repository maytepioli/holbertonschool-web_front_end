function countPrimeNumbers() {
  let counter = 0;

  for (let i = 2; i <= 100; i++) {
    let primo = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        primo = false;
        break;
      }
    }

    if (primo) {
      counter++;
    }
  }

  return counter;
}
