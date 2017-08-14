//step 1 - set your values (variables and result)

// step 2 - target the id's in the javascript

var a,b,result;

function setValues()
        {
            a = Number(document.getElementById("a").value);
            b = Number(document.getElementById("b").value);
        }

// step 3 - define what happens for every sum, subtraction, multiplication, division

function sum()
        {
          setValues();
          result = a+b;
          alert("The sum is equal to" + result);
        }
        function rest()
        {
          setValues();
          result = a-b;
          alert("The rest is equal to" + result);
        }
        function multiply()
        {
          setValues();
          result = a*b;
          alert("The operation is equal to" + result);
        }
        function divide()
        {
          setValues();
          result = a/b;
          alert("The operation is equal to" + result);
        }