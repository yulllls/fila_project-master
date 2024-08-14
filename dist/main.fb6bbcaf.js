// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/main.js":[function(require,module,exports) {
function SwiperMain() {
  var swiper = new Swiper('.swiper_main', {
    // Optional parameters
    /* direction: 'vertical', */
    loop: true,
    // If we need pagination
    pagination: {
      /* el: '.swiper-pagination',  구슬모양 추가*/
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper_main .swiper-button-next',
      prevEl: '.swiper_main .swiper-button-prev'
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper_main .swiper-scrollbar'
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    }
  });
}
SwiperMain();
var lnbMenu1 = document.querySelector('.lnb_menu1');
var lnbMenu2 = document.querySelector('.lnb_menu2');
var lnbMenu3 = document.querySelector('.lnb_menu3');
var lnbMenu4 = document.querySelector('.lnb_menu4');
var blurfilter = document.querySelector('.blur_filter');
var lnbWomen = document.querySelector('.lnb .lnb_list .women');
var lnbWomenMenu = document.querySelector('.lnb_menu_women');
var lnbMan = document.querySelector('.lnb .lnb_list .man');
var lnbManMenu = document.querySelector('.lnb_menu_man');
var lnbKids = document.querySelector('.lnb .lnb_list .kids');
var lnbKidsMenu = document.querySelector('.lnb_menu_kids');
var lnbBrand = document.querySelector('.lnb .lnb_list .brand');
var lnbBrandMenu = document.querySelector('.lnb_menu_Brand');
var lnbMenuWm = document.querySelector('.lnb_menu1 .man');
var lnbMenuWk = document.querySelector('.lnb_menu1 .kids');
var lnbMenuWb = document.querySelector('.lnb_menu1 .brand');
var lnbMenuMw = document.querySelector('.lnb_menu2 .women');
var lnbMenuMk = document.querySelector('.lnb_menu2 .kids');
var lnbMenuMb = document.querySelector('.lnb_menu2 .brand');
var lnbMenuKw = document.querySelector('.lnb_menu3 .women');
var lnbMenuKm = document.querySelector('.lnb_menu3 .man');
var lnbMenuKb = document.querySelector('.lnb_menu3 .brand');
var lnbMenuBw = document.querySelector('.lnb_menu4 .women');
var lnbMenuBm = document.querySelector('.lnb_menu4 .man');
var lnbMenuBk = document.querySelector('.lnb_menu4 .kids');
lnbWomen.addEventListener('mouseover', function () {
  lnbMenu1.style.display = 'block';
  blurfilter.style.display = 'block';
});
lnbWomen.addEventListener('mouseout', function () {
  lnbMenu1.style.display = 'none';
  blurfilter.style.display = 'none';
});
lnbMan.addEventListener('mouseover', function () {
  lnbMenu2.style.display = 'block';
  blurfilter.style.display = 'block';
});
lnbMan.addEventListener('mouseout', function () {
  lnbMenu2.style.display = 'none';
  blurfilter.style.display = 'none';
});
lnbKids.addEventListener('mouseover', function () {
  lnbMenu3.style.display = 'block';
  blurfilter.style.display = 'block';
});
lnbKids.addEventListener('mouseout', function () {
  lnbMenu3.style.display = 'none';
  blurfilter.style.display = 'none';
});
lnbBrand.addEventListener('mouseover', function () {
  lnbMenu4.style.display = 'block';
  blurfilter.style.display = 'block';
});
lnbBrand.addEventListener('mouseout', function () {
  lnbMenu4.style.display = 'none';
  blurfilter.style.display = 'none';
});
lnbMenu1.addEventListener('mouseover', function () {
  lnbMenu1.style.display = 'block';
  blurfilter.style.display = 'block';
});
lnbMenu1.addEventListener('mouseout', function () {
  lnbMenu1.style.display = 'none';
  blurfilter.style.display = 'none';
});
lnbMenu2.addEventListener('mouseover', function () {
  lnbMenu2.style.display = 'block';
  blurfilter.style.display = 'block';
});
lnbMenu2.addEventListener('mouseout', function () {
  lnbMenu2.style.display = 'none';
  blurfilter.style.display = 'none';
});
lnbMenu3.addEventListener('mouseover', function () {
  lnbMenu3.style.display = 'block';
  blurfilter.style.display = 'block';
});
lnbMenu3.addEventListener('mouseout', function () {
  lnbMenu3.style.display = 'none';
  blurfilter.style.display = 'none';
});
lnbMenu4.addEventListener('mouseover', function () {
  lnbMenu4.style.display = 'block';
  blurfilter.style.display = 'block';
});
lnbMenu4.addEventListener('mouseout', function () {
  lnbMenu4.style.display = 'none';
  blurfilter.style.display = 'none';
});
lnbMenuWm.addEventListener('mouseover', function () {
  lnbMenu1.style.display = 'none';
  lnbMenu1.style.zIndex = '1';
  lnbMenu2.style.display = 'block';
  lnbMenu2.style.zIndex = '5';
});
lnbMenuWk.addEventListener('mouseover', function () {
  lnbMenu1.style.display = 'none';
  lnbMenu1.style.zIndex = '1';
  lnbMenu3.style.display = 'block';
  lnbMenu3.style.zIndex = '5';
});
lnbMenuWb.addEventListener('mouseover', function () {
  lnbMenu1.style.display = 'none';
  lnbMenu1.style.zIndex = '1';
  lnbMenu4.style.display = 'block';
  lnbMenu4.style.zIndex = '5';
});
lnbMenuMw.addEventListener('mouseover', function () {
  lnbMenu2.style.display = 'none';
  lnbMenu2.style.zIndex = '1';
  lnbMenu1.style.display = 'block';
  lnbMenu1.style.zIndex = '5';
});
lnbMenuMk.addEventListener('mouseover', function () {
  lnbMenu2.style.display = 'none';
  lnbMenu2.style.zIndex = '1';
  lnbMenu3.style.display = 'block';
  lnbMenu3.style.zIndex = '5';
});
lnbMenuMb.addEventListener('mouseover', function () {
  lnbMenu2.style.display = 'none';
  lnbMenu2.style.zIndex = '1';
  lnbMenu4.style.display = 'block';
  lnbMenu4.style.zIndex = '5';
});
lnbMenuKw.addEventListener('mouseover', function () {
  lnbMenu3.style.display = 'none';
  lnbMenu3.style.zIndex = '1';
  lnbMenu1.style.display = 'block';
  lnbMenu1.style.zIndex = '5';
});
lnbMenuKm.addEventListener('mouseover', function () {
  lnbMenu3.style.display = 'none';
  lnbMenu3.style.zIndex = '1';
  lnbMenu2.style.display = 'block';
  lnbMenu2.style.zIndex = '5';
});
lnbMenuKb.addEventListener('mouseover', function () {
  lnbMenu3.style.display = 'none';
  lnbMenu3.style.zIndex = '1';
  lnbMenu4.style.display = 'block';
  lnbMenu4.style.zIndex = '5';
});
lnbMenuBw.addEventListener('mouseover', function () {
  lnbMenu4.style.display = 'none';
  lnbMenu4.style.zIndex = '1';
  lnbMenu1.style.display = 'block';
  lnbMenu1.style.zIndex = '5';
});
lnbMenuBm.addEventListener('mouseover', function () {
  lnbMenu4.style.display = 'none';
  lnbMenu4.style.zIndex = '1';
  lnbMenu2.style.display = 'block';
  lnbMenu2.style.zIndex = '5';
});
lnbMenuBk.addEventListener('mouseover', function () {
  lnbMenu4.style.display = 'none';
  lnbMenu4.style.zIndex = '1';
  lnbMenu3.style.display = 'block';
  lnbMenu3.style.zIndex = '5';
});
var header = document.querySelector(".header");
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.classList.add("fixed");
    header.style.top = "0px";
    if (currentScrollPos == 0) {
      header.style.backgroundColor = 'transparent';
    } else {
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.466)';
    }
  } else {
    /* header.classList.remove("fixed"); */
    header.style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};
var tabList = document.querySelectorAll('.tab_menu .list li');
for (var i = 0; i < tabList.length; i++) {
  var btn = tabList[i].querySelector('.btn');
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    for (var j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove('is_on');
    }
    this.parentNode.classList.add('is_on');
  });
}

/* $('.swiper-slide').on('mouseover', function(){
  swiper.autoplay.stop();
});
$('.swiper-slide').on('mouseout', function(){
  swiper.autoplay.start();
}); */

var bullet = ['1. 테니스 라이프 카라원피스', '2. 테니스 라이프 카라원피스', '3. 테니스 카라 원피스', '4. 테니스 라이프 니트 카라티셔츠', '5. 테니스 퍼포먼스 헨리넥 반팔티셔츠', '6. 베이직 리니어 반팔티', '7. Fila tennis 플레이어 반팔 티셔츠', '8. 세리프 스몰로고 반팔티셔츠'];
var shoppingBox = document.querySelector('.shopping_box');
var swiperSlideActive = document.querySelector('.swiper-slide-active');
function RankSwiper() {
  var swiper = new Swiper('.rank_swiper', {
    // Optional parameters
    loop: true,
    /* rewind: true, */

    // Navigation arrows
    navigation: {
      nextEl: '.rank_swiper .swiper-button-next',
      prevEl: '.rank_swiper .swiper-button-prev'
    },
    slidesPerView: 3,
    spaceBetween: 30,
    //사이간 여백

    centeredSlides: true,
    pagination: {
      el: ".rank_swiper .swiper-pagination",
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return '<div class="' + className + '"><span>' + bullet[index] + '</span></div>';
      }
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  });
}
RankSwiper();
var bullet2 = ['1. 레이플라이드', '2. 레이플라이드', '3. 레이플라이드v2', '4. 레이플라이드v2', '5. 레이플라이드v3', '6. 레이플라이드v5', '7. 레이플라이드v4', '8. 레이플라이드v6'];
function RankSwiper2() {
  var swiper = new Swiper('.rank_swiper2', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.rank_swiper2 .swiper-button-next',
      prevEl: '.rank_swiper2 .swiper-button-prev'
    },
    slidesPerView: 3,
    spaceBetween: 30,
    //사이간 여백

    centeredSlides: true,
    pagination: {
      el: ".rank_swiper2 .swiper-pagination",
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return '<div class="' + className + '"><span>' + bullet2[index] + '</span></div>';
      }
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  });
}
RankSwiper2();
var bullet3 = ['1. 헤리티지 크롭 브이넥 스웨터 베스트', '2. 헤리티지 더블와펜 맨투맨', '3. 테니스 뉴헤리티지 집업', '4. 테니스 뉴헤리티지 반바지', '5. 헤리티지 모노그램 크롭 자켓', '6. 헤리티지 코튼 팬츠', '7. 헤리티지 크롭 맨투맨', '8. 헤리티지 브이넥 맨투맨'];
function RankSwiper3() {
  var swiper = new Swiper('.rank_swiper3', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.rank_swiper3 .swiper-button-next',
      prevEl: '.rank_swiper3 .swiper-button-prev'
    },
    slidesPerView: 3,
    spaceBetween: 30,
    //사이간 여백

    centeredSlides: true,
    pagination: {
      el: ".rank_swiper3 .swiper-pagination",
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return '<div class="' + className + '"><span>' + bullet3[index] + '</span></div>';
      }
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  });
}
RankSwiper3();
var tabList2 = document.querySelectorAll('.tab_menu2 .list li');
for (var _i = 0; _i < tabList2.length; _i++) {
  var _btn = tabList2[_i].querySelector('.btn');
  _btn.addEventListener('click', function (event) {
    event.preventDefault();
    for (var j = 0; j < tabList2.length; j++) {
      tabList2[j].classList.remove('is_on');
    }
    this.parentNode.classList.add('is_on');
  });
}
function arrivalSwiper() {
  var swiper = new Swiper('.arrival_swiper', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.arrival_swiper .swiper-button-next',
      prevEl: '.arrival_swiper .swiper-button-prev'
    },
    slidesPerView: 3,
    spaceBetween: 30,
    //사이간 여백

    centeredSlides: true,
    /*     pagination: {
          el: ".arrival_swiper .swiper-pagination",
          clickable: true,
        }, */

    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  });
}
arrivalSwiper();
function arrivalSwiper2() {
  var swiper = new Swiper('.arrival_swiper2', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.arrival_swiper2 .swiper-button-next',
      prevEl: '.arrival_swiper2 .swiper-button-prev'
    },
    slidesPerView: 3,
    spaceBetween: 30,
    //사이간 여백

    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  });
}
arrivalSwiper2();
function arrivalSwiper3() {
  var swiper = new Swiper('.arrival_swiper3', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.arrival_swiper3 .swiper-button-next',
      prevEl: '.arrival_swiper3 .swiper-button-prev'
    },
    slidesPerView: 3,
    spaceBetween: 30,
    //사이간 여백

    centeredSlides: true,
    pagination: {
      el: ".arrival_swiper .swiper-pagination",
      clickable: true
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  });
}
arrivalSwiper3();
var show = document.querySelectorAll('.show_box');
window.addEventListener('scroll', function () {
  if (window.scrollY > 3200) {
    gsap.to(show[0], 0.5, {
      delay: 0,
      opacity: 1
    });
  } else if (window.scrollY < 2000) {
    gsap.to(show[0], 0, {
      delay: 0,
      opacity: 0
    });
  }
  if (window.scrollY > 3200) {
    gsap.to(show[1], 0.5, {
      delay: 0.5,
      opacity: 1
    });
  } else if (window.scrollY < 2000) {
    gsap.to(show[1], 0, {
      delay: 0,
      opacity: 0
    });
  }
  if (window.scrollY > 3200) {
    gsap.to(show[2], 0.5, {
      delay: 1,
      opacity: 1
    });
  } else if (window.scrollY < 2000) {
    gsap.to(show[2], 0, {
      delay: 0,
      opacity: 0
    });
  }
});
var point1 = document.querySelector('.point1');
var pointMenu1 = document.querySelector('.point_menu1');
var point2 = document.querySelector('.point2');
var pointMenu2 = document.querySelector('.point_menu2');
var point3 = document.querySelector('.point3');
var pointMenu3 = document.querySelector('.point_menu3');
var point4 = document.querySelector('.point4');
var pointMenu4 = document.querySelector('.point_menu4');
point1.addEventListener('click', function () {
  if (point1, 'click') {
    pointMenu1.style.opacity = 1;
  }
});
pointMenu1.addEventListener('mouseleave', function () {
  setTimeout(function () {
    pointMenu1.style.opacity = 0;
  }, 1000);
});
point2.addEventListener('click', function () {
  if (point2, 'click') {
    pointMenu2.style.opacity = 1;
  }
});
pointMenu2.addEventListener('mouseleave', function () {
  setTimeout(function () {
    pointMenu2.style.opacity = 0;
  }, 1000);
});
point3.addEventListener('click', function () {
  if (point3, 'click') {
    pointMenu3.style.opacity = 1;
  }
});
pointMenu3.addEventListener('mouseleave', function () {
  setTimeout(function () {
    pointMenu3.style.opacity = 0;
  }, 1000);
});
point4.addEventListener('click', function () {
  if (point4, 'click') {
    pointMenu4.style.opacity = 1;
  }
});
pointMenu4.addEventListener('mouseleave', function () {
  setTimeout(function () {
    pointMenu4.style.opacity = 0;
  }, 1000);
});
var point2_1 = document.querySelector('.point2_1');
var pointMenu2_1 = document.querySelector('.point_menu2_1');
var point2_2 = document.querySelector('.point2_2');
var pointMenu2_2 = document.querySelector('.point_menu2_2');
var point2_3 = document.querySelector('.point2_3');
var pointMenu2_3 = document.querySelector('.point_menu2_3');
point2_1.addEventListener('click', function () {
  if (point2_1, 'click') {
    pointMenu2_1.style.opacity = 1;
  }
});
pointMenu2_1.addEventListener('mouseleave', function () {
  setTimeout(function () {
    pointMenu2_1.style.opacity = 0;
  }, 1000);
});
point2_2.addEventListener('click', function () {
  if (point2_2, 'click') {
    pointMenu2_2.style.opacity = 1;
  }
});
pointMenu2_2.addEventListener('mouseleave', function () {
  setTimeout(function () {
    pointMenu2_2.style.opacity = 0;
  }, 1000);
});
point2_3.addEventListener('click', function () {
  if (point2_3, 'click') {
    pointMenu2_3.style.opacity = 1;
  }
});
pointMenu2_3.addEventListener('mouseleave', function () {
  setTimeout(function () {
    pointMenu2_3.style.opacity = 0;
  }, 1000);
});
var point3_1 = document.querySelector('.point3_1');
var pointMenu3_1 = document.querySelector('.point_menu3_1');
var point3_2 = document.querySelector('.point3_2');
var pointMenu3_2 = document.querySelector('.point_menu3_2');
point3_1.addEventListener('click', function () {
  if (point3_1, 'click') {
    pointMenu3_1.style.opacity = 1;
  }
});
pointMenu3_1.addEventListener('mouseleave', function () {
  setTimeout(function () {
    pointMenu3_1.style.opacity = 0;
  }, 1000);
});
point3_2.addEventListener('click', function () {
  if (point3_2, 'click') {
    pointMenu3_2.style.opacity = 1;
  }
});
pointMenu3_2.addEventListener('mouseleave', function () {
  setTimeout(function () {
    pointMenu3_2.style.opacity = 0;
  }, 1000);
});
var wingBanner = document.querySelector('.wing_banner');
$('.up').on('click', function () {
  $('html, body').animate({
    scrollTop: 0
  }, 500);
  return false;
});
$('.down').on('click', function () {
  $('html, body').animate({
    scrollTop: 6000
  }, 500);
  return false;
});
wingBanner.addEventListener('mouseover', function () {
  wingBanner.style.right = '0px';
});
wingBanner.addEventListener('mouseout', function () {
  wingBanner.style.right = '-49px';
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59859" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map