// bookingBarComponent.js 自動產生

window.loadBookingBar = function () {
  const target = document.getElementById("bookingBarComponent");
  if (!target) return;

  target.innerHTML = `
    <section class="bookingBarComponent bg-light">
  <div class="container-fluid bg-black text-white py-2 px-3">
    <i class="bi bi-suitcase-lg me-2"></i> 客房預訂
  </div>

  <div class="container-fluid bg-white">
    <div class="row text-center align-items-center g-0 border">

      <!-- 入住 -->
      <div class="col-md-2 p-3 border-end">
      <div class="text-muted">入住</div>
      <input type="text" id="checkIn" class="form-control text-center fw-bold fs-5" placeholder="選擇日期">
      </div>

      <div class="col-md-2 p-3 border-end">
        <div class="text-muted">退房</div>
        <input type="text" id="checkOut" class="form-control text-center fw-bold fs-5" placeholder="選擇日期">
      </div>


      <!-- 成人 -->
      <div class="col-md-2 p-3 border-end">
        <div class="text-muted">成人</div>
        <div class="d-flex justify-content-center align-items-center gap-3 fs-4">
          <button class="btn btn-link p-0" onclick="adjust('adult', -1)">－</button>
          <span id="adultCount">2</span>
          <button class="btn btn-link p-0" onclick="adjust('adult', 1)">＋</button>
        </div>
      </div>

      <!-- 兒童 -->
      <div class="col-md-2 p-3 border-end">
        <div class="text-muted">兒童</div>
        <div class="d-flex justify-content-center align-items-center gap-3 fs-4">
          <button class="btn btn-link p-0" onclick="adjust('child', -1)">－</button>
          <span id="childCount">0</span>
          <button class="btn btn-link p-0" onclick="adjust('child', 1)">＋</button>
        </div>
      </div>

      <!-- 按鈕 -->
      <div class="col-md-4 p-3">
        <button class="btn btn-dark w-100 py-3 fs-5">客房預訂</button>
      </div>
    </div>
  </div>
</section>

  `;
};
