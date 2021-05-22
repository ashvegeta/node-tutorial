function intro()
{
    console.log('\n---- Welcome to the calculator world ---- \n');
}

intro();

var sum = (a,b) => a+b;
var diff = (a,b) => a-b;
var mul = (a,b) => a*b;

var div = function(a,b) { 
    if(b!=0) 
    return a/b;
    else
    {
        console.log('divide by zero error');
    }
};


// export only the required modules
module.exports = {sum , diff , mul , div} ;
