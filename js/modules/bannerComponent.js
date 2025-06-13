window.loadBanner = function () {
  const target = document.getElementById("bannerComponent");
  if (!target) return;

  target.innerHTML = `
    <section class="bannerComponent position-relative container-fluid overflow-hidden">
      <div class="row">
        <!-- 左側圖片區 -->
        <div class="vertical-scroll-wrapper">
          <div class="vertical-scroll-inner">
            <div class="slide"><img src="images/news/news-happykid.jpg" alt="圖1" /></div>
            <div class="slide"><img src="images/news/news-flower.jpg" alt="圖2" /></div>
            <div class="slide"><img src="images/news/news-balloon.jpg" alt="圖3" /></div>
            <div class="slide"><img src="images/facility/pool03.jpg" alt="圖4" /></div>
            <div class="slide"><img src="images/news/news-cake.jpg" alt="圖5" /></div>
            <div class="slide"><img src="images/news/news-welcome.jpg" alt="圖6" /></div>
          </div>
        </div>

        <!-- 中央標語區 -->
        <div class="col-md-4 d-flex flex-column justify-content-center align-items-center text-center z-1">
          <h1 class="display-4 fw-bold lh-base">享樂高雄、<br>恬遊高雄</h1>
          <p class="text-muted mt-4">A hotel where you can unleash your senses in complete comfort</p>
        </div>

        <!-- 右側空欄撐排版 -->
        <div class="col-md-4"></div>
      </div>

      <!-- 背景圖 -->
      <div class="hero-bg-wrap">
        <img src="images/room.jpg" class="hero-bg position-absolute top-0 end-0 h-100" alt="背景房間" />
      </div>
      <div class="position-absolute top-0 end-0 text-white p-3 small z-2">長榮桂冠商務酒店</div>
    </section>
  `;

  const wrapper = document.querySelector(".vertical-scroll-wrapper");
  if (!wrapper) return;

  const scrollInner = wrapper.querySelector(".vertical-scroll-inner");
  if (!scrollInner) return;

  const originalSlides = Array.from(scrollInner.querySelectorAll(".slide"));
  const originalCount = originalSlides.length;

  // ✅ 複製每個 slide 一次（共 12 格）
  originalSlides.forEach(slide => {
    const clone = slide.cloneNode(true);
    scrollInner.appendChild(clone);
  });

  const allSlides = scrollInner.querySelectorAll(".slide");
  let loadedCount = 0;

  const tryStart = () => {
    const allImgs = scrollInner.querySelectorAll("img");
    if (loadedCount === allImgs.length) {
      const scrollDistance = originalCount * 100;
      document.documentElement.style.setProperty('--scroll-distance', `-${scrollDistance}vw`);

      requestAnimationFrame(() => {
        wrapper.classList.add("start");
      });
    }
  };

  scrollInner.querySelectorAll("img").forEach(img => {
    if (img.complete) {
      loadedCount++;
    } else {
      img.addEventListener("load", () => {
        loadedCount++;
        tryStart();
      });
      img.addEventListener("error", () => {
        loadedCount++;
        tryStart();
      });
    }
  });

  tryStart();
};
