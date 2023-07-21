const modifiers = {
  tabItemActive: 'tabs__item--active',
  tabPanelActive: 'tabpanels__item--active',
  accordionItemOpen: 'accordion__item--open'
};

const elsTabsPanel = document.querySelectorAll('.tabpanels__item');
const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabLink = document.querySelectorAll('.js-tabs-link');

const elsAccordionItem = document.querySelectorAll('.accordion__item');
const elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler');

function deactivateTabItems () {
  elsTabsItem.forEach(function (elTabsItem) {
    elTabsItem.classList.remove(modifiers.tabItemActive);
  });
}

function deactivateTabPanels () {
  elsTabsPanel.forEach(function (elTabsPanel) {
    elTabsPanel.classList.remove(modifiers.tabPanelActive);
  });
}

function closeAccordionItem () {
  elsAccordionItem.forEach(function (elAccordionItem) {
    elAccordionItem.classList.remove(modifiers.accordionItemOpen);
  });
}

elsTabLink.forEach (function (elTabLink) {
  elTabLink.addEventListener('click', function (evt) {
    evt.preventDefault();

    deactivateTabItems();

    elTabLink.parentElement.classList.add(modifiers.tabItemActive);

    deactivateTabPanels();

    const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);

    elTargetPanel.classList.add(modifiers.tabPanelActive);
  });
});

elsAccordionItemToggler.forEach (function (elAccordionItemToggler) {
  elAccordionItemToggler.addEventListener('click', function () {

    closeAccordionItem();
    elAccordionItemToggler.closest('.accordion__item').classList.add(modifiers.accordionItemOpen);
  })
});