// popularRoomsComponent.js 自動產生

window.loadPopularRooms = function () {
  const target = document.getElementById("popularRoomsComponent");
  if (!target) return;

  target.innerHTML = `
    <section class="popularRoomsComponent bg-light text-center">
  <div class="container">
    <h2 class="text-center hd-title">酒店房型</h2>

    <!-- 貴賓樓層 -->
    <div class="row align-items-center bg-white shadow-sm rounded overflow-hidden mb-5">
      <div class="col-md-6 text-start p-5">
        <span class="badge">25-28F</span>
        <h3 class="fw-bold fs-3">貴賓樓層</h3>
        <div class="text-uppercase text-muted mb-3">AUTHENTIC STYLE / BREEZE STYLE</div>
        <p class="text-muted mb-4">除了私人休息室，我們還提供專屬的服務。</p>
        <a href="#" class="btn btn-anim">更多<i class="fa-solid fa-arrow-right-long"></i></a>
      </div>
      <div class="col-md-6 p-0">
        <img src="images/room/room04.jpg" class="img-fluid w-100 h-100 object-fit-cover" alt="貴賓樓層">
      </div>
    </div>

    <!-- 高級樓層與一般樓層 -->
    <div class="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4">
      <div class="col">
        <div class="position-relative bg-white shadow-sm rounded overflow-hidden h-100">
          <img src="images/room/room04.jpg" class="img-fluid w-100 object-fit-cover" alt="高級樓層">
          <div class="roomTag">20-24F</div>
          <div class="p-4">
            <h4 class="fw-bold">高級樓層</h4>
            <a href="#" class="btn btn-anim b-s">了解<i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="position-relative bg-white shadow-sm rounded overflow-hidden h-100">
          <img src="images/room/room05.jpg" class="img-fluid w-100 object-fit-cover" alt="一般樓層">
          <div class="roomTag">9-19F</div>
          <div class="p-4">
            <h4 class="fw-bold">一般樓層</h4>
            <a href="#" class="btn btn-anim b-s">了解<i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

  `;
};