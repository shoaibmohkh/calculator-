/*
summary for Object :

    1] how to creat object :
        1.1- constructor way ==> let x = new fun_constructor();
        1.2- literal way ==> let x = {};
         
-------------------------------------------------
    2] how to add values to it :
        2.1-  let x = {
                  name: shoaib,
                  age: 1000
              };
        2.2-  let x.isStudent = true;
              └──➤ { name: shoaib, age: 1000, isStudent: true }

-------------------------------------------------
    3] delete value :
        - delete x.age;
          └──➤ { name: shoaib, isStudent: true }

-------------------------------------------------
    4] reach values :
        4.1- by dot ==> console.log (x.name);
        4.2- by square braket ==> console.log (x["name"]);
             └──➤ used when there's space with the key of the value;

-------------------------------------------------
    5] computed properties :
        -use key like this==> let key = prompt("what do you want to know about X")
        └──➤console.log(x[key]); //{name or isStudent}

-------------------------------------------------
    6] you can use any of the language reserved words in obj like keys

-------------------------------------------------
    7]  in :
       -let x = {};
        console.log(x.hello); ==> undefined
        └──➤ what if the value of (hello = undefined) like this
              let x = {hello: "undefined"};
              console.log(x.hello); ==> "undfined"
              to check on it we use "in" ==> console.log("hello" in x); ==> true

-------------------------------------------------
    8]  for - in :
        - let x = {
                  name: shoaib,
                  age: 1000
              };
        - for (let key in x)
                console.log(x[key]); // key = [name, age]
                                └──➤ you can print it just by using (square braket).

*/


function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function mod(a, b) {
    return a % b;
}

function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) return "Error";
    return a / b;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return plus(a, b);
        case '-':
            return minus(a, b);
        case '×':
            return multiply(a, b);
        case '÷':
            return division(a, b);
        case '%':
            return mod(a, b);
        default:
            return null;
    }
}

