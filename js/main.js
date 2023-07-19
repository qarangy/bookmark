const elsTabsPanel = document.querySelectorAll('.tabs__panel');
const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabLink = document.querySelectorAll('.js-tabs__link');

function deactivateTabItems () {
  elsTabsItem.forEach(function (elTabsItem) {
    elTabsItem.classList.remove('tabs__item--active');
  });
}

function deactivateTabPanels () {
  elsTabsPanel.forEach(function (elTabsPanel) {
    elTabsPanel.classList.remove('tabs__panel--active');
  });
}

elsTabLink.forEach (function (elTabLink) {
  elTabLink.addEventListener('click', function (evt) {
    evt.preventDefault();

    deactivateTabItems();

    elTabLink.parentElement.classList.add('tabs__item--active');

    deactivateTabPanels();

    const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);

    elTargetPanel.classList.add('tabs__panel--active');
  });
});