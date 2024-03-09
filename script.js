function fibonacci(num, memo = {}) {
  if(num==1){
	  return 0;
  }
  if(num==2){
		return 1;
	}
  
  if (!memo[num]) {
    memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  }
  
  return memo[num];
}
module.exports = fibonacci;
