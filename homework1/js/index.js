var high=  document.getElementById("input")
var result=  document.getElementById("html") 
var type=document.getElementById("inputtype")

function getSun(num1,num2)
{
    var sum=num1+num2;
    console.log(num1+"+"+num2+"="+(num1+num2));
}
getSun(5,6)
var a=100;
function test()
{
    console.log(a);
    a=10;
    console.log(a);
}
test();

 function triangle(){
     if(type.value==1)
     {
        for(var i=0;i<high.value;i++)
        {
            for(var j=0;j<=i;j++)
            {
                document.write("*");
            }
            document.write("<br>");
        }
     }
     if(type.value==2)
     {
         for(var i=1;i<=high.value;i++)
         {
             for(var j=1;j<=high.value-i;j++)
             {
                document.write('&nbsp ');
             }
            for(var k=1;k<=i;k++)
            {
                document.write("* &nbsp ");
            }
            document.write("<br>");
        }
     }
     if(type.value==3)
     {
        for(var i=1;i<=high.value;i++)
        {
            for(var j=1;j<=high.value-i;j++)
            {
               document.write('&nbsp ');
            }
           for(var k=1;k<=i;k++)
           {
               document.write("* &nbsp ");
           }
           document.write("<br>");
       }
       for(var i=high.value-1;i>=1;i--)
         {
             for(var j=1;j<=high.value-i;j++)
             {
                document.write('&nbsp ');
             }
            for(var k=1;k<=i;k++)
            {
                document.write("* &nbsp ");
            }
            document.write("<br>");
        }
     }
 }
