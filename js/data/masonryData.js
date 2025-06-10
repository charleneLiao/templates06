
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById("categoryContainer");
    const groups = container.querySelectorAll(".category-group");
    const navLinks = document.querySelectorAll(".carousel-nav a");

    const masonryArticles = [
        {
            img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
            title: "夏季雙人入住優惠，享免費早餐",
            content: "陽光灑落的清晨，用豐盛的自助早餐展開旅程！即日起至8月31日，凡預訂雙人房，皆享免費早餐與延遲退房，讓假期慢慢過。",
            category: "住宿優惠"
        },
        {
            img: "https://www.taiwan.net.tw/userfiles/image/2018photo/fooding.jpg",
            title: "連住兩晚享第2晚半價",
            content: "連續入住兩晚即可享有第2晚五折優惠，讓你省更多、玩更久，輕鬆延長假期的美好時光！",
            category: "住宿優惠"
        },
        {
            img: "https://www.taiwan.net.tw/userfiles/image/2018photo/bike.jpg",
            title: "免費腳踏車租借服務",
            content: "入住期間免費提供腳踏車租借服務，騎乘漫遊在地巷弄，體驗最地道的城市風景。",
            category: "住宿優惠"
        },
        {
            img: "https://www.taiwan.net.tw/userfiles/image/2018photo/love.jpg",
            title: "情侶入住送紅酒與花束",
            content: "即日起至七夕，預訂雙人房即贈進口紅酒與精緻花束，為你的浪漫時光增添濃情蜜意。",
            category: "住宿優惠"
        },
        {
            img: "https://www.taiwan.net.tw/userfiles/image/2018photo/sunset.jpg",
            title: "入住即享觀景酒吧9折券",
            content: "凡入住即贈觀景酒吧9折優惠券，夜晚小酌同時飽覽城市夜景，享受不一樣的放鬆時刻。",
            category: "住宿優惠"
        },

        {
            img: "https://www.taiwan.net.tw/userfiles/image/2018photo/heighway.jpg",
            title: "入住即贈台灣高鐵折價券",
            content: "旅行從抵達就開始有驚喜！凡預訂本飯店任一房型，即可獲得高鐵NT$100折價券，輕鬆節省交通費，旅程更愉快。",
            category: "住宿優惠"
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1683120849747-589e599acd61?q=80&w=2070",
            title: "三天兩夜旅遊行程推薦",
            content: "高雄必玩景點一次包辦！入住本飯店可搭配港灣導覽行程，帶你走訪駁二、旗津與蓮池潭，拍出滿滿旅遊回憶。",
            category: "活動訊息"
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1664356873648-4a640ce09ea7?q=80&w=1925",
            title: "親子友善！兒童免費入住專案",
            content: "孩子的笑容，是旅程最美的風景！12歲以下兒童免費加床，再送遊戲禮包，全家出遊超值又開心。",
            category: "活動訊息"
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1695635984829-2e5bf1f7af60?q=80&w=2070",
            title: "週年慶住房送晚餐套餐",
            content: "舌尖上的假期盛宴！慶祝週年，凡平日入住即贈雙人晚餐套餐，美味饗宴為您的旅程添上圓滿句點。",
            category: "餐飲優惠"
        },
        {
            img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620",
            title: "在地藝文展覽體驗",
            content: "欣賞在地藝術展覽，感受文化氛圍！飯店周邊藝文空間合作展出，住客憑房卡即可免費入場。",
            category: "藝文活動"
        }
    ];

    function shuffle(array) {
        const result = array.slice();
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    }

    groups.forEach(group => {
        const category = group.dataset.category;
        const matched = shuffle(masonryArticles.filter(a => a.category === category));

        group.innerHTML = `
      <div class="row">
        ${matched.map(article => `
          <a href="news_detail.html" class="col-12 col-md-6 col-lg-4 mb-4">
            <div class="card h-100 border-0 shadow-sm">
              <img src="${article.img}" class="card-img-top" alt="${article.title}">
              <div class="card-body">
                <h5 class="card-title">${article.title}</h5>
                <p class="card-text">${article.content}</p>
              </div>
            </div>
          </a>
        `).join('')}
      </div>
    `;
    });

    // 初始只顯示第一類
    groups.forEach(g => g.style.display = "none");
    const defaultCategory = "住宿優惠";
    const defaultGroup = container.querySelector(`[data-category="${defaultCategory}"]`);
    if (defaultGroup) defaultGroup.style.display = "block";

    // 分類點擊切換
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const selected = this.dataset.category;

            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");

            groups.forEach(g => {
                g.style.display = g.dataset.category === selected ? "block" : "none";
            });
        });
    });
});
