var input;
input = prompt("Enter the number");
inputint = parseInt(input);
var temp = inputint;
var rem=0,rev=0;
while(temp!=0){
    rem = temp%10;
    rev = rev*10+rem;
    temp = Math.floor(temp/10);
}
if(rev==inputint){
    alert("Palindrome");
}
else{
    alert("Not a pallindrome");
}
