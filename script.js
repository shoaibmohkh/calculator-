/*
summary for Object :

	1] how to creat object :
		1.1- constructor way ==> let x = new fun_constructor();
		1.2- literal way ==> let x = {};
		
-------------------------------------------------
	2] how to add xs to it :
		2.1-  let x = {
				name: shoaib,
				age: 1000
			};
		2.2-  let x.isStudent = true;
			└──➤ { name: shoaib, age: 1000, isStudent: true }

-------------------------------------------------
	3] delete x :
		- delete x.age;
		└──➤ { name: shoaib, isStudent: true }

-------------------------------------------------
	4] reach xs :
		4.1- by dot ==> console.log (x.name);
		4.2- by square braket ==> console.log (x["name"]);
			└──➤ used when there's space with the key of the x;

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
		└──➤ what if the x of (hello = undefined) like this
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

let result_div = document.querySelector(".result");
let button = document.querySelectorAll("button");
let total_string = "";

function result_f()
{
	result_div.innerText = eval(total_string);
	total_string = result_div.innerHTML.toString(); 
}

function delete_ac(result)
{
	total_string = "";
	result_div.innerText = "";
}

button.forEach(current_btn => {
	current_btn.addEventListener("click", () => {
		let x = current_btn.innerText;
		//console.log(x);
		if (x == "=")
			result_f();
		else if (x == "AC")
			delete_ac();
		else
		{
			let last_char = total_string[total_string.length - 1];
			if ("+-*/%".includes(last_char) && "+-×÷%".includes(x))
				return	;
			if (x === "×")
				x = "*";
			if (x === "÷") 
				x = "/";
			total_string += x;
			result_div.innerText = total_string;
		}
	});
});

