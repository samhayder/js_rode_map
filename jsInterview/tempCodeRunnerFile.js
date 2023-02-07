function unzip(arr){
  let array = arr.flat().reduce((acc,cur) => {
    acc[typeof cur] ? acc[typeof cur].push(cur) : (acc[typeof cur] = [cur]);
    return acc;
  })
  return array;
   //acc[typeof cur] ? acc[typeof cur].push(cur) : (acc[typeof cur] = [cur]);
        return acc;
}
console.log(unzip([['a', 1, true], ['b', 2, false]]));