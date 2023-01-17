
  $(document).ready(function () {    // We place code inside this function for jquery funcation to wait when page is reload
    // your jquery code must here 
    // $('Selector').action()     // syntex should be this

        // $('#dt3').text('The text of dt3 is changed');


    console.log("It is a jqery function");
    $('h2').click(function () {
      console.log("You clicked on h2")
    })

    $('p').click(function () {
      console.log('you click on p');
      $(this).hide();                 // if we use $('p').hide then it will hide all p on 1 click
      // $('#id').click();
      // $('.class').hide()
    })

    $('#btn').click(function(){
        $('#dt').toggle(1000);   // 1000 is milisecond , the time takes to hide or show
        // $('#dt2').fadeIn(2000);
        // $('#dt3').fadeOut(2000);
        // $('#dt4').fadeToggle(2000);
        // $('#dt5').fadeTo(2000);


        // $('#dt2').slideUp(1500)
        // $('#dt2').slideUp(1500)
        $('#dt2').slideToggle(1500, function(){
          console.log('done')
        })

        // Animation function

        $('#dt3').animate({
          opacity:0.4,
          height:'300px',
          width:'200px'

        }, "slow")

    })


  })


