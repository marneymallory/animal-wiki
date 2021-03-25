$(document).ready(function(){
  
  $("#animal-form").submit(function(event){
    // now the form is submited
    const unicorn = $("#unicorn")[0];
    const dragon = $("#dragon")[0];
    const bigfoot = $("#bigfoot")[0];
    
    if(unicorn.selected === true){
      $(".unicorn").show()
    }
    if(dragon.selected === true){
      $(".dragon").show()
    }
    if(bigfoot.selected === true){
      $(".bigfoot").show()
    }

    event.preventDefault();
  });
});