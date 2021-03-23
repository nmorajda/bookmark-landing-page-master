import '../scss/main.scss';

window.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const btnHamburger = document.querySelector('.btn-hamburger');
  const header = document.querySelector('.header');
  const tabs = document.querySelector('.tabs');
  const ctaForm = document.querySelector('.cta__form');
  const ctaInput = document.getElementById('stayUpToDate');

  const handleBtnHamburger = () => {
    body.classList.toggle('overflow-hidden');
    btnHamburger.classList.toggle('btn-hamburger--open');
    header.classList.toggle('mobile-nav--active');
  };

  const changeTabs = e => {
    const currentTab = e.target;
    const activeContent = document.getElementById(currentTab.dataset.id);
    const items = [...tabs.querySelectorAll('.tabs__tab')];

    items.forEach(item => {
      document.getElementById(item.dataset.id).classList.remove('active');
      item.classList.remove('active');
    });

    currentTab.classList.add('active');
    activeContent.classList.add('active');
  };

  const handleCtaForm = e => {
    e.preventDefault();

    const showSuccess = () => {
      ctaInput.parentElement.className = 'form__field form__field--success';
      ctaInput.nextElementSibling.textContent = '';
    };

    const showError = () => {
      ctaInput.parentElement.className = 'form__field form__field--error';
      ctaInput.nextElementSibling.textContent = ctaInput.dataset.errorMessage;
    };

    // Disable browser validation
    ctaForm.novalidate = true;

    ctaInput.validity.valid ? showSuccess() : showError();
  };

  // EVENTS
  // mobile menu open/close
  btnHamburger.addEventListener('click', handleBtnHamburger);

  // tabs
  tabs.addEventListener('click', changeTabs);

  // cta form submit
  ctaForm.addEventListener('submit', handleCtaForm);
});
