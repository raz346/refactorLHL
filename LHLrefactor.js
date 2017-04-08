for ( var i = 100 ; i <= 200 ; i++)
{
// condition 1
  (i % 3 === 0 && i % 4 != 0) ? console.log ( "Loopy" ) :
// condition 2
  (i % 4 === 0 && i % 3 != 0) ? console.log( "Lighthouse" ) :
//condition 3
  (i % 3 === 0 && i % 4 === 0) ? console.log ("LoopyLighthouse") :
// print the rest of the numbers

console.log(i);
}