// Display is hidden as default
document.getElementById('output').style.visibility = 'hidden';

document.getElementById('lbsInput').addEventListener('input', function(e){
  // console.log(123);

  // Display will appear as the event listener fires
  document.getElementById('output').style.visibility = 'visible';

  let lbs = e.target.value;
  // console.log(lbs);

  // For grams
  document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;

  //For Kilograms
  document.getElementById('kgOutput').innerHTML = lbs/2.2046;

  //For Ounces
  document.getElementById('ozOutput').innerHTML = lbs*16;
});
