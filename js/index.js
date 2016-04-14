$('body').keyup(function(e){
  
  if(e.keyCode == 32){
    // Random Rothko
     randomRothko() ;
   }

});

// get rand
function randomNumber(limit){
  return Math.floor(Math.random()*limit);
}

function randomRothko() {
  
  var randGrad = 'linear-gradient(to bottom, rgba(230,148,4,1) 0%, rgba(244,176,3,1) 5%, rgba(244,176,3,1) 29%, rgba(234,139,4,1) 38%, rgba(215,48,6,1)' +  randomNumber(100) + '%, rgba(215,48,6,1) 100%)';
  
  
  var inset = 'inset 0px 10px 10px ' + randomNumber(100) + 'px ' + 'rgba(220,107,4,1)';

  $('body').css({
    'background' : randGrad,
    'box-shadow' : inset
});
  
  
};