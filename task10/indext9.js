var number=Number(prompt("Enter the Number"));
var count = 0;
var text=""
for(let i=1;i<=number;i++)
{
    if(number%i==0)
    {
count+=1;
    }
}

if(count==2)
{
    console.log(number+" is a Prime Number!");
}
else
{
    console.log("It is not a Prime Number");
}
