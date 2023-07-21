const elsTabsPanel = document.querySelectorAll('.tabpanels__item');
const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabLink = document.querySelectorAll('.js-tabs-link');
const elsAccordionItem = document.querySelectorAll('.accordion__item');
const elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler');

function deactivateTabItems () {
  elsTabsItem.forEach(function (elTabsItem) {
    elTabsItem.classList.remove('tabs__item--active');
  });
}

function deactivateTabPanels () {
  elsTabsPanel.forEach(function (elTabsPanel) {
    elTabsPanel.classList.remove('tabpanels__item--active');
  });
}

function closeAccordionItem () {
  elsAccordionItem.forEach(function (elAccordionItem) {
    elAccordionItem.classList.remove('accordion__item--open');
  });
}

elsTabLink.forEach (function (elTabLink) {
  elTabLink.addEventListener('click', function (evt) {
    evt.preventDefault();

    deactivateTabItems();

    elTabLink.parentElement.classList.add('tabs__item--active');

    deactivateTabPanels();

    const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);

    elTargetPanel.classList.add('tabpanels__item--active');
  });
});

elsAccordionItemToggler.forEach (function (elAccordionItemToggler) {
  elAccordionItemToggler.addEventListener('click', function () {

    closeAccordionItem();
    elAccordionItemToggler.closest('.accordion__item').classList.add('accordion__item--open');
  })
});