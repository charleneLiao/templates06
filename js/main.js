// 動態載入 JS 檔（靜態網站用）
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = src;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    try {
        // 1. 載入所有模組（順序要留意有依賴的先載）
        await loadScript("js/modules/headerComponent.js");
        await loadScript("js/modules/bannerComponent.js");
        await loadScript("js/modules/bookingBarComponent.js");
        await loadScript("js/modules/specialOffersComponent.js");
        await loadScript("js/modules/popularRoomsComponent.js");
        await loadScript("js/modules/diningFacilitiesComponent.js");
        await loadScript("js/modules/footerComponent.js");

        // 2. 呼叫每個模組內對應的初始化函式
        window.loadHeader?.();
        window.loadBanner?.();
        window.loadBookingBar?.();
        window.loadSpecialOffers?.();
        window.loadPopularRooms?.();
        window.loadDiningFacilities?.();
        window.loadFooter?.();

        // 3. 額外處理房型文案掛載（可放首頁或房型頁用）
        const room = window.roomIntro?.[0];
        const titleEl = document.getElementById("roomTitle");
        const descEl = document.getElementById("roomDesc");
        if (room && titleEl && descEl) {
            titleEl.textContent = room.title;
            descEl.textContent = room.description;
        }

    } catch (err) {
        console.error("載入模組失敗", err);
    }

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    // 入住日期初始化
    flatpickr("#checkIn", {
        locale: "zh",
        dateFormat: "Y/m/d",
        minDate: "today",
        defaultDate: today,
        onChange: function (selectedDates, dateStr, instance) {
            // 當入住日期變更，退房自動設為 +1 天
            const nextDay = new Date(selectedDates[0]);
            nextDay.setDate(nextDay.getDate() + 1);
            flatpickr("#checkOut").setDate(nextDay);
        }
    });

    // 退房日期初始化
    flatpickr("#checkOut", {
        locale: "zh",
        dateFormat: "Y/m/d",
        minDate: "today",
        defaultDate: tomorrow
    });

    // 人數加減控制
    window.adjust = function (type, change) {
        const countSpan = document.getElementById(type + "Count");
        let value = parseInt(countSpan.textContent);
        value = Math.max(0, value + change);
        countSpan.textContent = value;
    };
});

document.addEventListener("DOMContentLoaded", function () {
  loadHeader();
});


