let x=$('.side-box').innerWidth()

$('.icon').on('click',function(){
    // let x=$('.side-box').innerWidth()
    // $('.side-box').toggle(2000);
    $('.side-box').animate({width:'toggle', paddingInline:'toggle'},1000)
})

$('.closebtn i').on('click', function(){
    $('.side-box').hide();
})

// ///singers//////
$('.active').next().not().siblings('p').slideUp();

$('.singer h2').on('click',function(e){
    
    $(e.target).next().slideToggle();
    $(e.target).siblings('h2').next().slideUp();
})


 $('textarea').keyup(function(){
    let  textareaLength=document.querySelector('textarea').value.length;
    // console.log(textareaLength);
    $('#spanCount').text(
        100-textareaLength<=0?"available characters finished":100-textareaLength
    )

 })
 function clear(){
    document.querySelector('textarea').value='';

 }
 clear()

////////counter/////////

 var endDate = new Date("2024-12-31T23:59:59").getTime();

  setInterval(function() {
    var dateTimeNow = new Date().getTime();
    var remainingTime = endDate - dateTimeNow;

    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    $('.days').html(-days + " D ");
    $('.hours').html(hours + " h");
    $('.mins').html(minutes + " m");
    $('.seconds').html(seconds + " s");
  }, 1000);

//   smooth scroll////
$('.side-box a').on('click',function(e){
    let ahref=e.target.getAttribute('href');
    // console.log(ahref);
    let sectionOffset=$(ahref).offset().top;
    // console.log(sectionOffset);
    $('body').animate({scrollTop:sectionOffset},2000)
})

  