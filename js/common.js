$(function () {
    // 导航吸顶
    $(window).scroll(function () {
        if ($(window).scrollTop() > 106) {
            $('#nav-zf').addClass('nav-fix-zf')
        } else {
            $('#nav-zf').removeClass('nav-fix-zf')
        }
    })

    // 导航高亮
    var hash = '#' + window.location.pathname.split('.')[0].slice(1)

    if (hash === '#') {
        $('#navbarNav .nav-link').removeClass('active')
        $('#index').addClass('active')
    } else {
        $('#navbarNav .nav-link').removeClass('active')
        if (hash.indexOf('brand_intro') != -1) {
            $('#brand_intro').addClass('active')
        } else if (hash.indexOf('product_display') != -1) {
            $('#product_display').addClass('active')
        } else if (hash.indexOf('coop') != -1) {
            $('#coop').addClass('active')
        } else if (hash.indexOf('store_image') != -1) {
            $('#store_image').addClass('active')
        } else if (hash.indexOf('news_info') != -1) {
            $('#news_info').addClass('active')
        } else if (hash.indexOf('contact_us') != -1) {
            $('#contact_us').addClass('active')
        }
    }
})
