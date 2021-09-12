var high=  document.getElementById("input")
var result=  document.getElementById("html") 
var type=document.getElementById("inputtype")

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
 }
