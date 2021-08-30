module.exports = function check(str, bracketsConfig) {
  console.log("str", str);
  const BRACKETS_PAIR = {};
  const openBrackets = [];
  for (j of bracketsConfig) {
    // console.log(j);
    // console.log(j[0]);
    // console.log(j[1]);
    openBrackets.push(j[0]); //  [( , [ , {]
    BRACKETS_PAIR[j[0]] = j[1]; // [{:}  , (:) ,  [:]]
  }
  console.log(bracketsConfig);
  console.log("openBrackets=", openBrackets);
  console.log("BRACKETS_PAIR", BRACKETS_PAIR);
  let stack = [];
  stack.push(str[0]);
  for (let i = 1; i < str.length; i++) {
    let current = str[i];
    console.log("i=", i, "current", current);
    if (BRACKETS_PAIR[current] === current && current === stack[stack.length - 1])
    stack.pop();
    else if (openBrackets.includes(current) && BRACKETS_PAIR[current] != current) {
      stack.push(current);
      // console.log("current is openBracket, push in stack", "stack=", stack);
    } else if (stack.length === 0) {
      console.log("emptystack");
      
      // return false;
    }
    let firstOut = stack[stack.length - 1];
    if (BRACKETS_PAIR[firstOut] === current) {
      stack.pop();
      
      // console.log("cut ", firstOut, "from stack");
    }
    // } else {
    //   console.log("have no pair");
    //   return false;
    // }
  }

  // console.log(stack.length === 0);
  return stack.length === 0;
};
