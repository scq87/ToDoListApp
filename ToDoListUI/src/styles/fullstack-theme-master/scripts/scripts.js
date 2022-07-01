const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

M.FloatingActionButton.init($('.fixed-action-btn'))

const $tt = $('.tap-target')
const $modal = $('.modal')
const $ttp = $('.tooltipped')
const $slider = $('.slider')
const $parallax = $('.parallax')

if ($tt) {
  const tapTarget = M.TapTarget.init($tt)
  $('#dashboard-info').addEventListener('click', function() {
    tapTarget.open()
  })
}

if ($modal) {
  M.Modal.init($modal)
}

if ($('.datepicker')) {
  M.Datepicker.init($$('.datepicker'), {
    format: 'dd.mm.yyyy',
    showClearBtn: true
  })
}

if ($slider) {
  M.Slider.init($$('.slider'),{
    indicators: false,
    height: 375
  })
  
}

if ($parallax) {
  M.Parallax.init($parallax)
}

const $filter = $('.js-filter')

if ($filter) {
  $filter.addEventListener('click', function() {
    $filter.classList.toggle('active')
    $('.js-filter-block').classList.toggle('hide')
  })
}

if ($ttp) {
  M.Tooltip.init($ttp)
}



