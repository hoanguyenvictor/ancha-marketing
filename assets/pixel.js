/* ============================================================
   META (FACEBOOK) PIXEL — Ancha Marketing
   👉 DÁN PIXEL ID CỦA CHỊ VÀO DÒNG NGAY DƯỚI (giữa 2 dấu nháy)
      Lấy ở: business.facebook.com → Trình quản lý sự kiện → Nguồn dữ liệu
   VD:  window.ANCHA_PIXEL_ID = '1234567890123456';
   ============================================================ */
window.ANCHA_PIXEL_ID = '1542966343372354';

(function () {
  var ID = window.ANCHA_PIXEL_ID;
  if (!ID) return; // chưa điền ID -> pixel không chạy, web vẫn hoạt động bình thường
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', ID);
  fbq('track', 'PageView');
})();

/* Hàm bắn sự kiện an toàn — các trang gọi qua đây.
   Nếu chưa cài Pixel thì tự bỏ qua, không gây lỗi. */
window.anchaTrack = function (event, params) {
  try { if (window.fbq && window.ANCHA_PIXEL_ID) window.fbq('track', event, params || {}); }
  catch (e) {}
};
