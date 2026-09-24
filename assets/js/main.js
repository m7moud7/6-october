const featureQuote = document.querySelector(".quote-feature blockquote").textContent.trim();

document.querySelectorAll("[data-share]").forEach((button) => {
  button.addEventListener("click", async () => {
    const kind = button.dataset.share;
    const url = location.href;
    const text = featureQuote;
    if (kind === "print") {
      window.print();
      return;
    }
    const links = {
      x: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    };
    window.open(links[kind], "_blank", "noopener,width=640,height=640");
  });
});

const videoSwiper = document.querySelector(".video-swiper");
if (videoSwiper && window.Swiper) {
  new Swiper(videoSwiper, {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 16,
    grid: { rows: 1, fill: "row" },
    grabCursor: true,
    watchOverflow: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    pagination: {
      el: videoSwiper.querySelector(".swiper-pagination"),
      clickable: true
    },
    navigation: {
      nextEl: videoSwiper.parentElement.querySelector(".swiper-button-next"),
      prevEl: videoSwiper.parentElement.querySelector(".swiper-button-prev")
    },
    breakpoints: {
     300: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        grid: { rows: 1, fill: "row" }
      },
     600: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 18,
        grid: { rows: 1, fill: "row" }
      },
      800: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 18,
        grid: { rows: 2, fill: "row" }
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 22,
        grid: { rows: 2, fill: "row" }
      }
    }
  });
}

const quoteSwiper = document.querySelector(".quote-swiper");
if (quoteSwiper && window.Swiper) {
  new Swiper(quoteSwiper, {
    slidesPerView: 1,
    spaceBetween: 16,
    grabCursor: true,
    watchOverflow: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    breakpoints: {
      800: {
        slidesPerView: 2,
        spaceBetween: 22
      }
    },
    pagination: {
      el: quoteSwiper.querySelector(".swiper-pagination"),
      clickable: true
    },
    navigation: {
      nextEl: quoteSwiper.parentElement.querySelector(".swiper-button-next"),
      prevEl: quoteSwiper.parentElement.querySelector(".swiper-button-prev")
    }
  });
}

document.querySelectorAll("[data-ad]").forEach((button) => {
  button.addEventListener("click", () => {
    showToast("رابط التقديم غير متاح في النسخة التجريبية");
  });
});
