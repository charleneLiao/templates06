// bannerComponent.js 自動產生

window.loadBanner = function () {
  const target = document.getElementById("bannerComponent");
  if (!target) return;

  target.innerHTML = `
    <section class="bannerComponent position-relative container-fluid overflow-hidden">
  <div class="row">
    <!-- 左側圖片區 -->
<div class="vertical-scroll-wrapper">
  <div class="vertical-scroll-inner">
    <img src="images/lo01.jpg" alt="圖1" />
    <img src="images/lo02.jpg" alt="圖2" />
    <img src="images/lo03.jpg" alt="圖3" />
    <!-- 為了 loop 加重複圖片 -->
    <img src="images/lo01.jpg" alt="圖1-copy" />
    <img src="images/lo02.jpg" alt="圖2-copy" />
    <img src="images/lo03.jpg" alt="圖3-copy" />
  </div>
</div>
<!-- 圖片結束-->


    </div>

    <!-- 中央標語區 -->
    <div class="col-md-4 d-flex flex-column justify-content-center align-items-center text-center z-1">
      <h1 class="display-4 fw-bold lh-base">享樂高雄、<br>恬遊高雄</h1>
      <p class="text-muted mt-4">A hotel where you can unleash your senses in complete comfort</p>
    </div>

    <!-- 右側空欄撐排版（背景圖會疊在上面） -->
    <div class="col-md-4"></div>
  </div>

  <!-- 背景圖：房間 -->
  <img src="images/room.jpg" class="hero-bg position-absolute top-0 end-0 h-100" alt="背景房間" />

  <!-- 疊上去的右上角飯店文字 -->
  <div class="position-absolute top-0 end-0 text-white p-3 small z-2">
    長榮桂冠商務酒店
  </div>
</section>`;

  const carousel = document.querySelector('#verticalCarousel');
  const inner = carousel.querySelector('.vertical-carousel-inner');
  const items = carousel.querySelectorAll('.carousel-item');

  let index = 0;
  const itemCount = items.length;

  setInterval(() => {
    index = (index + 1) % itemCount;
    inner.style.transform = `translateY(-${index * 100}%)`;

    items.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
  }, 3000); // 每 3 秒滾動

};