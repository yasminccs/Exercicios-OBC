const mediaAS = (num) => {
    const sum = num.reduce((acc, n) => acc + n, 0)
    const md = sum / num.length
    return md
}
console.log(mediaAS([1, 4, 5, 9, 10]))

const mediaAP = (nums, weights) => {
    const [sum, weightSum] = weights.reduce(
      (acc, w, i) => {
        acc[0] = acc[0] + nums[i] * w
        acc[1] = acc[1] + w
        return acc
      },[0, 0] )
    return sum / weightSum
  }
console.log(mediaAP([7, 9, 9], [3, 2, 5]))

const mediana = (num) => {
  const cnt = num.length % 2
  if(cnt === 0){
    const middle1 = num[Math.floor(num.length / 2)]
    const middle = num[Math.floor((num.length - 1) / 2)]
    const arr = [middle, middle1]
    return mediaAS(arr)

  } else {
    const middle = num[Math.floor(num.length / 2)]
    return middle
  }
}
console.log(mediana([2, 4, 5, 7, 42, 99])) //par

function mode(arr) {
  const counts = {};
  let maxCount = 0;
  let maxKey;
  // Conta quantas vezes cada obj aparece e acompanha a contagem mais alta que vimos.
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    const count = (counts[key] = (counts[key] || 0) + 1);
    if (count > maxCount) {
      maxCount = count;
      maxKey = key;
    }
  }
  // Retorna (uma das) as chaves mais altas que vimos, ou indefinidas.
  return maxKey;
}
console.log(mode([1, 1, 2, 3, 5]))