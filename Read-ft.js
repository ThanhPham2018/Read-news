(function () {
  // Lấy URL hiện tại
  var currentUrl = window.location.toString();

  // Kiểm tra nếu URL chứa "ft.com"
  if (currentUrl.includes("ft.com")) {
    // Thay đổi URL
    var newUrl = currentUrl.replace("https://", "https://freedium.cfd/");
    window.location = newUrl;
  }
})();
