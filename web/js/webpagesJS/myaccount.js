
$(document).ready(function () {

 $(document).on('click', '.myprofile', function () {
        $('.change').hide();
        $('.orderdisplay').hide();
        $('.wishdisplay').hide();
        $('.payment').hide();
        $('.labell').text('My Profile');
        $('.pro').addClass('active');
        $('.pass').removeClass('active');
        $('.myorder').removeClass('active');
        $('.mywish').removeClass('active');
        $('.paymentoptions').removeClass('active');
        $('.profile').show();
    });

 $(document).on('click', '.chPass', function () {
        $('.profile').hide();
        $('.orderdisplay').hide()
        $('.wishdisplay').hide();
        $('.payment').hide();
        $('.labell').text('Change Password');
        $('.active').removeClass('active');
        $('.pass').addClass('active');
        $('.change').show();
    });


 $(document).on('click', '.ordertext', function () {
        $('.profile').hide();
        $('.change').hide();
        $('.wishdisplay').hide();
        $('.payment').hide();
        $('.labell').text('My Orders');
        $('.active').removeClass('active');
        $('.myorder').addClass('active');
        $('.orderdisplay').show();
    });

  $(document).on('click', '.wish', function () {
        $('.profile').hide();
        $('.change').hide();
        $('.orderdisplay').hide();
        $('.payment').hide();
        $('.labell').text('My Wishlist');
        $('.active').removeClass('active');
        $('.mywish').addClass('active');
        $('.wishdisplay').show();
    });


  $(document).on('click', '.payText', function () {
        $('.profile').hide();
        $('.change').hide();
        $('.wishdisplay').hide();
         $('.orderdisplay').hide();
        $('.labell').text('My Payment Options');
        $('.active').removeClass('active');
        $('.paymentoptions').addClass('active');
        $('.payment').show();
    });
});