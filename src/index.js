module.exports = function count(s, pairs) {

  
  let count = 0;
  let totients = [], nontotients = [];
  let pairsCount = pairs.length;

  for (let j = 0; j < s.length; j++) {
    let totientNumber = 1;
    let notTotient = 1;
    const zero = s[j] == '0'? 1: 0;
    for (let k = 0; k < pairsCount; k++) {

      let p = pairs[k][0];
      let a = pairs[k][1];
      
      totientNumber *= ((p ** a - p ** (a - 1)) - j);
      notTotient *= (p ** (a - 1));
    }
    totients.push(totientNumber);
    nontotients.push(notTotient + zero);
  }

  if (s[0] == '0' && s.length == 1) {
    return (totients[0] + nontotients[0]) % 1000000007;
  }

  count = totients[0];

  for (let j = 0; j < s.length; j++) {
    if (s[j] == '1') {  
      count = Math.min(totients[j], count);
    }
  }


  const result = count % 1000000007;
  return result;
}