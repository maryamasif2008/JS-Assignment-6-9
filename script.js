                                               //CHAPTER 06-09

                                              /* Question 01 */

var message = ("<h1> Question 01 </h1> \n <h2> Result: </h2> \n The value of a is: 10 <br> ........................................... <br> "); 
document.write(message)
var num1 = (" <br> The value of ++a is:");
var x = 11;
document.write(num1 + " " + x)
var message = ("<br> Now the value of a is: 11 <br>");
document.write(message)  
var num1 = (" <br> The value of a++ is:");
var x = 11;
document.write(num1 + " " + x)
var message = ("<br> Now the value of a is: 12 <br>");
document.write(message)

var num1 = (" <br> The value of --a is:");
var x = 11;
document.write(num1 + " " + x)
var message = ("<br> Now the value of a is: 11 <br>");
document.write(message)
var num1 = (" <br> The value of a-- is:");
var x = 11;
document.write(num1 + " " + x)
var message = ("<br> Now the value of a is: 10 <br>");
document.write(message)

                                             /* Question 02 */

var message = (" <h1> Question 02 </h1> \n a is: 2 <br> b is: 1 <br> result=  ");
document.write(message)
var a = 2;
var b = 1;
var result =( a + --a + b);
document.write(result ) 
var message = (" <br> <br> a is: 2 <br> b is: 1 <br> result=  ");
document.write(message)
var a = 2;
var b = 1;
var result =(a-- - --b);
document.write(result)
var message = (" <br> <br>  a is: 2 <br> b is: 1 <br> result=  ");
document.write(message)
var a = 2;
var b = 1;
var result =(--a - --b + ++b);
document.write(result)
var message = (" <br> <br> a is: 2 <br> b is: 1 <br> result=  ");
document.write(message)
var a = 2;
var b = 1;
var result =(--a - --b + ++b + b--);
document.write(result)

                                           /* Question 03 */

var message = (" <h1> Question 03 </h1> ");
document.write(message)
var name = prompt("Enter your name");
if(name){
alert("Hello, " +" " + " ! Nice to meet you. ");
}else{
alert("You didn't enter a name");
}

                                          /* Question 04 */

var message = (" <h1> Question 04 </h1> ");
document.write(message)

var table = ("<h3>Table of 5</h3>  5x1=5 <br> 5x2=10 <br> 5x3=15 <br> 5x4=20 <br> 5x5=25 <br> 5x6=30 <br> 5x7=35 <br> 5x8=40 <br> 5x9=45 <br> 5x10=50 ");  
document.write(table)
var name = prompt("Enter your number");
if(number){
alert(" multiplication of 5 is :" + 5 * number);
}else{
alert("You didn't enter a number");
} 

                                          /* Question 05 */

var message =(" <h1> Question 05 </h1> \n <h3> Subject Total Marks Obtained Marks Persentage </h3>");
document.write(message)
var name1 = "English";
var num1 =  100;
var num2 =  54;
var num3 =  "54%";
document.write(name1   +   " "  +   num1  +  "  "  +  num2  +  "  "  +  num3 )
var name2 = "<br>Math";
var num4 =  100;
var num5 =  54;
var num6 = "54%";
document.write(name2   +   "   "  +   num4  +  "  "  +  num5  +  "  "  +  num6  )
var name3 = "<br>Urdu";
var num7 =  100;
var num8 = 48;
var num9 =  "48%";
document.write(name3   +   "   "  +   num7  +  "     "  +  num8  +  "  "  +  num9 )
var result1 = "<br>300";
var result2 = "156";
var result3 = "52%" ;
document.write(result1 + " " + result2 + "    " + result3 )  


