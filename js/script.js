$(document).ready(function() {
  const id = (prompt("what animal do you want to learn about?").val());

  $("form#animals").submit(function(event) {
    const animal = ("input#animal").val();
    $("#unicorn").text();

  
    event.preventDefault();
  })}

  
    // (".clickable").click(function() {
  //   (".unicorn-showing").toggle();
  //   (".unicorn-hidden").toggle();
  //   });
  //   if (id === "unicorn") {
  //     $("#unicorn").show();
  //   }
  //   (".clickable").click(function() {
  //     (".dragon-showing").toggle();
  //     (".dragon-hidden").toggle();
  //   });
  //   if (id === "dragon") {
  //     $("#dragon").show();
  //   }
  //   (".clickable").click(function() {
  //     (".bigfoot-showing").toggle();
  //     (".bigfoot-hidden").toggle();
  //   });
  // if (id === "bigfoot") {
  //     $("bigfoot").show();
  // 