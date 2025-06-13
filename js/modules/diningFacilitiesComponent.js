// diningFacilitiesComponent.js 自動產生

window.loadDiningFacilities = function () {
  const target = document.getElementById("diningFacilitiesComponent");
  if (!target) return;

  target.innerHTML = `
    <section class="diningFacilitiesComponent">
      <div class="container-fluid">
      <h2 class="text-center hd-title">多元美饌 <br class="d-md-none">品味高雄</h2>

        <div class="marquee-wrapper overflow-hidden py-3">
          <ul class="marquee d-flex align-items-center mb-0">
            <li><img src="images/food-s-pic/sfd-01.jpg" alt="圖1" class="" /></li>
            <li><img src="images/food-s-pic/sfd-03.jpg" alt="圖3" class="" /></li>
            <li><img src="images/food-s-pic/sfd-04.jpg" alt="圖4" class="" /></li>
            <!-- 重複一組用來無限輪播 -->
            <li><img src="images/food-s-pic/sfd-06.jpg" alt="圖2" class="" /></li>
            <li><img src="images/food-s-pic/sfd-08.jpg" alt="圖3" class="" /></li>
            <li><img src="images/food-s-pic/sfd-09.jpg" alt="圖4" class="" /></li>
            <li><img src="images/food-s-pic/sfd-11.jpg" alt="圖2" class="" /></li>
          </ul>
        </div>

        </div>
    </section>
  `;
};