$(window).on("load",function(){
    $(".preloader").fadeOut(1000);
})
$('a').click(function (event) {
    event.preventDefault();
  });


$(".icon3").on('click',function(){
$(".answer-span").hide()
$('.emptyspan').empty()
    })

$(".icon4").on('click',function(){
$(".answer-span").show()
})
    function openIcon1() {
        document.querySelector(".icon1-open").style.display = "block";
        $('.allPageScale').addClass('disabled');
      }
      function openIcon2() {
        document.querySelector(".icon2-open").style.display = "block";
        $('.allPageScale').addClass('disabled');
      }
 
var closeBtn1=document.querySelector('.imgIcon1'),
 closeBtn2=document.querySelector('.imgIcon2'),
openicon1=document.querySelector(".icon1-open"),
openicon2=document.querySelector(".icon2-open")
function closeIcon1(event) {
    if (event.target === closeBtn1) {
        openicon1.style.display='none'
    }    
}
function closeIcon2(event) {
    if (event.target === closeBtn2) {
        openicon2.style.display='none'
    }
}
///////////////////
    answerFocused=$(".answerBtn")
    $(this).removeClass("selected")

    $(answerFocused).on('click',function(){  
        $(".answerBtn").removeClass("selected")
            $(this).addClass("selected")  
        selectedAnswer=$(this).val()
    })
    
        $(".empty-span").on('click',function(){
            
            question=$(this)
            answerVal=($(this).children().text())
                if(selectedAnswer!==answerVal){               
                    $(this).html(selectedAnswer)
                    setTimeout(function(){
                        $(question).css("visibility", "hidden")                      
                    }, 1000)
                    document.getElementById('audio-incorrect').play();
                    $(this).addClass('wrong')

                }else{
                    $(this).html(selectedAnswer)
                    document.getElementById('audio-correct').play();
                    $(this).addClass('right')
                }
            })
      
  
    