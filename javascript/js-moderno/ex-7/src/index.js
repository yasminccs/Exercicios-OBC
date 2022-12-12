const average = (...num) => {
    const sum = num.reduce((acc, n) => acc + n, 0)
    const md = sum / num.length
    return md
}
console.log(average(1, 4, 5, 9, 10))

const weightedAverage = (...entries) => {
    const sum = entries.reduce((acc, { num, weight }) => acc + (num*(weight ?? 1)), 0)
    const weightSum = entries.reduce((acc, entry) => acc + (entry.weight ?? 1), 0)
    return sum / weightSum
  }
console.log(weightedAverage(
  {num: 9, weight: 3},
  {num: 7},
  {num: 10, weight: 1}
  ))

const median = (num) => {
  const cnt = num.length % 2
  if(cnt === 0){
    const middle1 = num[Math.floor(num.length / 2)]
    const middle = num[Math.floor((num.length - 1) / 2)]
    const arr = [middle, middle1]
    return average(...arr)

  } else {
    const middle = num[Math.floor(num.length / 2)]
    return middle
  }
}
console.log(median([2, 4, 5, 7, 42, 99])) //par

function mode(...arr) {
  const counts = {};
  let maxCount = 0;
  let maxKey;
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    const count = (counts[key] = (counts[key] || 0) + 1);
    if (count > maxCount) {
      maxCount = count;
      maxKey = key;
    }
  }
  return maxKey;
}
console.log(mode(1, 1, 2, 3, 5))