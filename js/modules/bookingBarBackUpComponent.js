window.loadBookingBar = function () {
  const target = document.getElementById("bookingBarComponent");
  if (!target) return;

  target.innerHTML = `<section class="bookingBarComponent bg-light">
  <div class="container bg-black text-white py-2 px-3">
    <i class="bi bi-suitcase-lg me-2"></i> 客房預訂
  </div>
  <div class="container bg-white">
    <div class="row text-center align-items-center g-0 border">
 <p class="hd"><i class="icon-bag"></i>客房預訂</p>

      <!-- 入住 -->
      <div class="col-md-2 border-end">
        <label for="checkIn" class="form-label text-muted mb-1">入住</label>
        <input type="text" id="checkIn" class="form-control text-center fw-bold fs-5" placeholder="選擇日期" autocomplete="off" />
      </div>

      <!-- 退房 -->
      <div class="col-md-2 border-end">
        <label for="checkOut" class="form-label text-muted mb-1">退房</label>
        <input type="text" id="checkOut" class="form-control text-center fw-bold fs-5" placeholder="選擇日期" autocomplete="off" />
      </div>

      <!-- 成人 -->
      <div class="col-md-2 border-end">
        <div class="text-muted mb-1">成人</div>
        <div class="d-flex justify-content-center align-items-center gap-3 fs-4">
          <button type="button" class="btn btn-link p-0" onclick="adjust('adult', -1)">－</button>
          <span id="adultCount">2</span>
          <button type="button" class="btn btn-link p-0" onclick="adjust('adult', 1)">＋</button>
        </div>
      </div>

      <!-- 兒童 -->
      <div class="col-md-2 border-end">
        <div class="text-muted mb-1">兒童</div>
        <div class="d-flex justify-content-center align-items-center gap-3 fs-4">
          <button type="button" class="btn rounded-circle btn-outline-dark" onclick="adjust('child', -1)">－</button>
          <span id="childCount">0</span>
          <button type="button" class="btn rounded-circle btn-outline-dark" onclick="adjust('child', 1)">＋</button>
        </div>
      </div>

      <!-- 預訂按鈕 -->
      <div class="col-md-4 p-3">
        <button type="button" class="btn btn-dark w-100 py-3 fs-5">客房預訂</button>
      </div>
    </div>
  </div>
</section>

  `;
};
