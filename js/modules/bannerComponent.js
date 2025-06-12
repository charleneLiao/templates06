window.loadBanner = function () {
  const target = document.getElementById("bannerComponent");
  if (!target) return;

  target.innerHTML = `
    <section class="bannerComponent position-relative container-fluid overflow-hidden">
      <div class="row">
        <!-- 左側圖片區 -->
        <div class="vertical-scroll-wrapper">
          <div class="vertical-scroll-inner">
            <img src="images/news/news-happykid.jpg" alt="圖1" />
            <img src="images/news/news-flower.jpg" alt="圖2" />
            <img src="images/news/news-balloon.jpg" alt="圖3" />
            <!-- 為了 loop 加重複圖片 -->
             <img src="images/facility/pool03.jpg" alt="圖1" />
            <img src="images/food-s-pic/sfd-10.jpg" alt="圖2" />
            <img src="images/news/news-welcome.jpg" alt="圖3" />
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

// ✅ 自動複製圖片一次（無縫輪播）
const originalImages = Array.from(scrollInner.querySelectorAll("img"));
originalImages.forEach(img => {
  const clone = img.cloneNode(true);
  scrollInner.appendChild(clone);
});

const images = scrollInner.querySelectorAll("img");
let loadedCount = 0;

const tryStart = () => {
  if (loadedCount === images.length) {
    requestAnimationFrame(() => {
      wrapper.classList.add("start");
    });
  }
};

if (images.length === 0) {
  wrapper.classList.add("start");
  return;
}

images.forEach(img => {
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

tryStart(); // 處理快取情況
}