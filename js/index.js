window.addEventListener('load', function () {
  var swiper = new Swiper('.mySwiper', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  let header_l = document.querySelector('.header_l');
  console.log(header_l);
  let ul = this.document.querySelector('.header_l ul');
  console.log(ul);
  let list = document.querySelectorAll('.header_l  li');
  console.log(list);

  for(let i=0; i<list.length;i++){
    // list.setAttribute('index',i);
    // let index = this.getAttribute('index');
    // console.log(index);
    // list.addEventListener('click',function(){
     
    list[i].onclick = function(){
      for (var i = 0; i < list.length; i++) {
        list[i].className='';
      }
      this.className='current';   
    // })
    }
  }




});
