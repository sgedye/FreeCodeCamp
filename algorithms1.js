

function factorialize(num) {
  let answer = 1;
  for (let i=num; i>0; i--) {
    answer *= i;
  }
	if (num === 0) {
		answer = 1;
	}
  return answer;
}
factorialize(0);
