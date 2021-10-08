$('.fadein').hide();
$('.pop').hide();


const html = {
  basic: [
    'Basic Dental including 1 free annual checkup at a participating practice',
    'Optical including prescription and non-prescription glasses, sunglasses & lenses',
    'Physiotherapy, Chiropractic & Natural Therapies'    
  ],
  silverPlus: [
    'Everything from Basic Cover',
    'Top Hospital cover including discounted private room usage',
    'General and Major dental up to $2000 including 4 free checkups per year at a participating practice'
  ],
  premium: [
    'Everything from SilverPlus Cover',
    '3 days free hospital private room after major surgeries',
    'General and Major dental up to $2000 including 4 free checkups per year at a participating practice'
  ]
};

const circle = '<i class="far fa-check-circle"></i>';

// each card on click
$('.basic').on('click', function() {
  $('.pop').fadeIn(500);
  basicCard();
});

$('.silverplus').on('click', function() {
  $('.pop').fadeIn(500);
  silverPlusCard();
});

$('.premium').on('click', function() {
  $('.pop').fadeIn(500);
  premiumCard();
})



// cards specifics : basic, silverPlus & premium

const basicCard = () => { 
  $('.one-waiting').text('1 day');
  $('.two-waiting').text('Nil');
  $('.three-waiting').text('1 month');
  $('.four-waiting').text('2 months');

  $('.fadein p').text('Includes $300 combined annual limit for you:');
  $('.detail-one').html(`${circle}  ${html.basic[0]}`);
  $('.detail-two').html(`${circle}  ${html.basic[1]}`);
  $('.detail-three').html(`${circle}  ${html.basic[2]}`);


  $('.add').text('Add Optional Extras');
  $('.extra-price').show();
  $('.fadein button').show();
  
}

const silverPlusCard = () => {  
  $('.one-waiting').text('Nil');
  $('.three-waiting').text('Nil');
  $('.four').text('Essential Extras')
  $('.four-waiting').text('Nil');


  $('.fadein p').text('Includes $1000 combined annual limit for you:');
  $('.detail-one').html(`${circle}  ${html.silverPlus[0]}`);
  $('.detail-two').html(`${circle}  ${html.silverPlus[1]}`);
  $('.detail-three').html(`${circle}  ${html.silverPlus[2]}`);
  $('.add').text('Extras included');
  $('.extra-price').hide();
  $('.fadein button').hide();
  scrollTop();  
}

const premiumCard = () => {  
  $('.one-waiting').text('Nil');
  $('.three-waiting').text('Nil');
  $('.four').text('Essential Extras')
  $('.four-waiting').text('Nil');


  $('.fadein p').text('Includes $3000 shared combined annual limit for you and your dependent (eg. your child or your spouse) :');
  $('.detail-one').html(`${circle}  ${html.premium[0]}`);
  $('.detail-two').html(`${circle}  ${html.premium[1]}`);
  $('.detail-three').html(`${circle}  ${html.premium[2]}`);
  $('.add').text('Extras included');
  $('.extra-price').hide();
  $('.fadein button').hide();
  scrollTop();

}

const scrollTop = () => {
  $('html, body').animate({scrollTop: '0px'}, 500);
}

// Triggering Buttons
$('.add').on('click', function() {
  $('.fadein').fadeIn(1000);
});

$('.fadein .yes').on('click', function() {
  $('.fadein .yes').html('<i class="far fa-check-circle add-tick"></i> <small>Added!</small>');
});

$('.fadein .no').on('click', function() {
  if (!$('.fadein .yes').text('Add')) {
    $('.fadein .yes').html('Add');
  }
});


// Close buttons
$('.close').on('click', function() {
  $('.fadein').fadeOut(500);
});

$('.boxClose i').on('click', function() {
  $('.pop').hide(1000);
  $('.fadein').hide();
})

