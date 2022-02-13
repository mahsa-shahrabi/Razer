"use strict";
$(document).ready(function () {
    let cartBox = $(".cart-box");
    let searchBox = $(".search-box");
    let searchBoxCollapse = $(".search-box-collapse");
    let menuIcon = $(".menu-icon");
    let centerSide = $(".center-side");
    let closeCollapseIcon = $(".close-collapse-icon");
    let cartCollapse = $(".cart-collapse");
    let pc = $(".pc");
    let pcSubMenu = $(".pc-sub-menu");
    let footerCol1 = $(".footer-col1");
    let footerCol2 = $(".footer-col2");
    let footerCol3 = $(".footer-col3");
    let footerCol4 = $(".footer-col4");
    let footerPlusIcon1 = $(".footer-plus-icon1");
    let footerPlusIcon2 = $(".footer-plus-icon2");
    let footerPlusIcon3 = $(".footer-plus-icon3");
    let footerPlusIcon4 = $(".footer-plus-icon4");




    $(".cart-icon").click(function () {
        cartBox.toggle();
    })
    $(".search-icon").click(function () {
        searchBox.show();
    })
    $(".close-icon").click(function () {
        searchBox.hide();
    })
    menuIcon.click(function () {
        centerSide.slideDown(600);
        searchBoxCollapse.fadeToggle(300);
        menuIcon.toggle();
        closeCollapseIcon.toggle();
        cartCollapse.toggle();
    })
    closeCollapseIcon.click(function () {
        centerSide.slideUp(600);
        searchBoxCollapse.fadeToggle(300);
        closeCollapseIcon.toggle();
        menuIcon.toggle();
        cartCollapse.toggle();
    })
    $(".cart-collapse-icon").click(function () {
        cartBox.toggle();
    })
    pc.click(function () {
        $(".if-pc-open").toggle();
        pc.toggleClass("pc-border");
        pcSubMenu.toggle();
        pcSubMenu.toggleClass("sub-menu-display");
        $(".pc-open-icon").toggleClass("pc-close-icon");
    })
    $("body").click(function (evt) {
        if ($(evt.target).closest(".cart-box, .cart-icon, .cart-collapse-icon").length) {
            return
        }
        cartBox.hide();
    })
    $("body").click(function (evt) {
        if ($(evt.target).closest(".search-box, .search-icon").length) {
            return
        }
        searchBox.hide();
    })



    $(".footer-label-box1").click(function () {
        footerCol1.slideToggle();
        footerCol2.hide();
        footerCol3.hide();
        footerCol4.hide();
        footerPlusIcon1.toggleClass("footer-plus-icon-rotate");
        footerPlusIcon2.removeClass("footer-plus-icon-rotate");
        footerPlusIcon3.removeClass("footer-plus-icon-rotate");
        footerPlusIcon4.removeClass("footer-plus-icon-rotate");
    })
    $(".footer-label-box2").click(function () {
        footerCol2.slideToggle();
        footerCol1.hide();
        footerCol3.hide();
        footerCol4.hide();
        footerPlusIcon2.toggleClass("footer-plus-icon-rotate");
        footerPlusIcon1.removeClass("footer-plus-icon-rotate");
        footerPlusIcon3.removeClass("footer-plus-icon-rotate");
        footerPlusIcon4.removeClass("footer-plus-icon-rotate");
    })
    $(".footer-label-box3").click(function () {
        footerCol3.slideToggle();
        footerCol1.hide();
        footerCol2.hide();
        footerCol4.hide();
        footerPlusIcon3.toggleClass("footer-plus-icon-rotate");
        footerPlusIcon1.removeClass("footer-plus-icon-rotate");
        footerPlusIcon2.removeClass("footer-plus-icon-rotate");
        footerPlusIcon4.removeClass("footer-plus-icon-rotate");
    })
    $(".footer-label-box4").click(function () {
        footerCol4.slideToggle();
        footerCol1.hide();
        footerCol2.hide();
        footerCol3.hide();
        footerPlusIcon4.toggleClass("footer-plus-icon-rotate");
        footerPlusIcon1.removeClass("footer-plus-icon-rotate");
        footerPlusIcon2.removeClass("footer-plus-icon-rotate");
        footerPlusIcon3.removeClass("footer-plus-icon-rotate");
    })
});