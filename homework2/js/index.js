//pro1
console.log("pro1");
function getSum(num1,num2)
{
    var sum=num1+num2;
    console.log(num1+"+"+num2+"="+(num1+num2));
}
getSum(2,4);
//pro2
console.log("pro2");
var getProduct=function(num1,num2)
{
    console.log(num1+"*"+num2+"="+(num1*num2));
}
getProduct(2,4);//错误原因getProduct is not a function
//pro3
console.log("pro3");
var a=100;
function test()
{
    console.log(a);
    a=10;
    console.log(a);
}
test();
console.log(a);
//pro4
console.log("pro4");
var a=10;
fun1();
function fun1()
{
    var b=20;
    console.log(a);
    console.log(b);
    var a=30
}
//pro5
console.log("pro5");
function fun2(a,b)
{
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
fun2(1,2,3);
//pro6
console.log("pro6");
function fun3(a,b)
{
    for (i in arguments)
    {
        console.log(arguments[i]);
    }
}
fun3(1,2,3);
//pro7
console.log("pro7");
