function timer(secondes) 
{  
if (secondes > 0) {
    console.log(secondes);
    timer(secondes - 1);
}
}

timer(10);