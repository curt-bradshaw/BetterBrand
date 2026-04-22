$(function () {
  console.log("ntg test")
});

// This will let run function only once that the selecter element/class/id is present on a page
var waitForEl = function(selector, callback) {
  if (jQuery(selector).length) {
    callback();
  } else {
    setTimeout(function() {
      waitForEl(selector, callback);
    }, 100);
  }
};
/*
waitForEl('input[skio-selling-plan-group] + .skio-group-label .skio-group-content', function() {
  // work the magic
  console.log("founddd");
  console.log($('input[skio-selling-plan-group] + .skio-group-label .skio-group-content'));
  $('input[skio-selling-plan-group] + .skio-group-label .skio-group-content').append(
    `<ul>
      <li>
        <span><svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6855 0.248892C11.2947 -0.106312 10.6871 -0.0784741 10.33 0.314153L4.47391 6.76253L1.64477 3.88638C1.27131 3.50813 0.664605 3.50237 0.287325 3.87486C-0.090924 4.24638 -0.0966854 4.85406 0.275802 5.2323L3.81724 8.83232C3.99869 9.01663 4.24443 9.11936 4.5017 9.11936C4.50746 9.11936 4.51419 9.11936 4.51995 9.12033C4.78491 9.11457 5.03453 9.00128 5.21211 8.80545L11.7507 1.60542C12.1069 1.21177 12.0781 0.605065 11.6855 0.248892Z" fill="#0F1F17"/></svg></span>
        20% off every order
      </li>
      <li>
        <span><svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6855 0.248892C11.2947 -0.106312 10.6871 -0.0784741 10.33 0.314153L4.47391 6.76253L1.64477 3.88638C1.27131 3.50813 0.664605 3.50237 0.287325 3.87486C-0.090924 4.24638 -0.0966854 4.85406 0.275802 5.2323L3.81724 8.83232C3.99869 9.01663 4.24443 9.11936 4.5017 9.11936C4.50746 9.11936 4.51419 9.11936 4.51995 9.12033C4.78491 9.11457 5.03453 9.00128 5.21211 8.80545L11.7507 1.60542C12.1069 1.21177 12.0781 0.605065 11.6855 0.248892Z" fill="#0F1F17"/></svg></span>
        Pause, Cancel Or Update The Frequency Anytime
      </li>
      <li>
        <span><svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6855 0.248892C11.2947 -0.106312 10.6871 -0.0784741 10.33 0.314153L4.47391 6.76253L1.64477 3.88638C1.27131 3.50813 0.664605 3.50237 0.287325 3.87486C-0.090924 4.24638 -0.0966854 4.85406 0.275802 5.2323L3.81724 8.83232C3.99869 9.01663 4.24443 9.11936 4.5017 9.11936C4.50746 9.11936 4.51419 9.11936 4.51995 9.12033C4.78491 9.11457 5.03453 9.00128 5.21211 8.80545L11.7507 1.60542C12.1069 1.21177 12.0781 0.605065 11.6855 0.248892Z" fill="#0F1F17"/></svg></span>
        Priority fulfilment
      </li>
      <li>
        <span><svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6855 0.248892C11.2947 -0.106312 10.6871 -0.0784741 10.33 0.314153L4.47391 6.76253L1.64477 3.88638C1.27131 3.50813 0.664605 3.50237 0.287325 3.87486C-0.090924 4.24638 -0.0966854 4.85406 0.275802 5.2323L3.81724 8.83232C3.99869 9.01663 4.24443 9.11936 4.5017 9.11936C4.50746 9.11936 4.51419 9.11936 4.51995 9.12033C4.78491 9.11457 5.03453 9.00128 5.21211 8.80545L11.7507 1.60542C12.1069 1.21177 12.0781 0.605065 11.6855 0.248892Z" fill="#0F1F17"/></svg></span>
        FREE GIFT with every order
      </li>
    </ul>`
  );
});
*/
waitForEl('#mintty-tiktok-feed .juniper-new-carousel-wrapper', function() {
  // const box = document.getElementById('mintty-tiktok-feed')
  // const jack = document.createElement(`h2`)
  // jack.classList.add('ntg-h2')
  // jack.innerHTML = `${juniperLocalTitle}`
  // box.insertBefore(jack, box.firstChild)
  $('#mintty-tiktok-feed').prepend (`<h2 class="ntg-h2">${juniperLocalTitle}</h2></div>`);
  $('#mintty-tiktok-feed .juniper-new-arrow').appendTo('#mintty-tiktok-feed .ntg-h2');
  $('#mintty-tiktok-feed .juniper-new-arrow-next').html(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14.8"><path d="M20 7.4c0-.2-.1-.4-.2-.6L13.2.2c-.2-.1-.4-.2-.6-.2-.2 0-.4.1-.6.2-.1.1-.2.3-.2.6 0 .2.1.4.2.6l5.3 5.3H.8c-.2 0-.4.1-.6.2-.1.1-.2.3-.2.5s.1.4.2.6c.1.1.3.2.6.2h16.6l-5.3 5.3c-.1.1-.2.2-.2.4v.5c.1.1.2.3.3.4.1.1.3.1.4.1.1 0 .2 0 .3-.1.1 0 .2-.1.3-.2L19.8 8c.1-.2.2-.4.2-.6z" fill="#231f20"></path></svg>`);
  $('#mintty-tiktok-feed .juniper-new-arrow-prev').html(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14.8"><path d="M19.8 6.8c-.1-.1-.3-.2-.6-.2H2.7L8 1.3c.1-.1.2-.3.2-.5S8.1.4 8 .2C7.8.1 7.6 0 7.4 0c-.2 0-.4.1-.6.2L.2 6.8c-.1.2-.2.4-.2.6 0 .1 0 .2.1.3 0 .1.1.2.2.3l6.6 6.6c.1.1.2.1.3.2.1 0 .2.1.3.1.2 0 .3 0 .4-.1.1-.1.2-.2.3-.4.1-.1.1-.3 0-.5 0-.2-.1-.3-.2-.4L2.7 8.2h16.6c.2 0 .4-.1.6-.2 0-.2.1-.4.1-.6s-.1-.4-.2-.6z" fill="#231f20"></path></svg>`);
});


document.addEventListener('DOMContentLoaded', () => {
  const productOfferSlide = new Swiper('.ntg-product-offer-slide', {
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: true,
  });
});