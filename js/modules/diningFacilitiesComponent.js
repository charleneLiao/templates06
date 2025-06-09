// diningFacilitiesComponent.js 自動產生

window.loadDiningFacilities = function () {
  const target = document.getElementById("diningFacilitiesComponent");
  if (!target) return;

  target.innerHTML = `
    <section class="diningFacilitiesComponent">
      <div class="container-fluid">
      <h2 class="display-5 fw-bold text-center">
        <em class="d-block">多元美饌 <br class="d-md-none">品味高雄</em>
        <span class="d-block fs-6 text-muted mt-2">RESTAURANT &amp; BAR</span>
      </h2>

        <div class="marquee-wrapper overflow-hidden py-3 bg-light">
          <ul class="marquee d-flex align-items-center mb-0">
            <li><img src="images/food-s-pic/sfd01.jpg" alt="圖1" class="" /></li>
            <li><img src="images/food-s-pic/sfd02.jpg" alt="圖2" class="" /></li>
            <li><img src="images/food-s-pic/sfd03.jpg" alt="圖3" class="" /></li>
            <li><img src="images/food-s-pic/sfd04.jpg" alt="圖4" class="" /></li>
            <!-- 重複一組用來無限輪播 -->
            <li><img src="images/food-s-pic/sfd05.jpg" alt="圖1" class="" /></li>
            <li><img src="images/food-s-pic/sfd06.jpg" alt="圖2" class="" /></li>
            <li><img src="images/food-s-pic/sfd07.jpg" alt="圖3" class="" /></li>
            <li><img src="images/food-s-pic/sfd08.jpg" alt="圖4" class="" /></li>
          </ul>
        </div>

        </div>
    </section>
  `;
};