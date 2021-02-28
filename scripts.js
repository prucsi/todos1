$(document).ready(
    function(){
        $('#button').click(   function(){
                var toAdd = $('input[name=listaelem]').val();
                 $('ol').append('<li>' + toAdd + '</li>');
            });
       
       $("input[name=listaelem]").keyup(function(event){
          if(event.keyCode == 13){
            $("#button").click();
          }         
      });
      
      $(document).on('dblclick','li', function(){
        $(this).toggleClass('strike').fadeOut('slow');    
      });
      
      $('input').focus(function() {      $(this).val('');
      });
      
      $('ol').sortable();  
      
    }
);


$('.todos-container').on('click', '.delete-button', (event) => {
    $(event.target).text('This button was clicked');
  });

  
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
// tudom van amit még tanulni