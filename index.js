const navToggle = document.getElementById('humberger-btn');
const navBar = document.getElementById('navigation-bar');
const overlay = document.getElementById('overlay');

// toggle the navbar
navToggle.addEventListener('click', () => {

    const navStat = navBar.getAttribute('aria-expanded');

    if(navStat === 'false') {
        navBar.setAttribute('aria-expanded', true);
        navToggle.setAttribute('data-menu', 'open');
        overlay.style.display = 'block';
    } else {
        navBar.setAttribute('aria-expanded', false);
        navToggle.setAttribute('data-menu', 'closed');
        overlay.style.display = 'none';
    }
})


const featuresDropdownToggle = document.getElementById('features-btn');
const companyDropdownToggle = document.getElementById('company-btn');

const featuresDropdown = document.getElementById('dropdown-menu-features');
const companyDropdown = document.getElementById('dropdown-menu-company');

// show and hide the features dropdown menu
featuresDropdownToggle.addEventListener('click', () => {

    var featuresVisibility = featuresDropdown.getAttribute('data-visible');

    if(featuresVisibility === 'false') {
        featuresDropdown.setAttribute('data-visible', true);
        featuresDropdown.style.display = 'block';
        featuresDropdownToggle.style.setProperty('--content', 'url(images/icon-arrow-up.svg)');
    } else {
        featuresDropdown.setAttribute('data-visible', false);
        featuresDropdown.style.display = 'none';
        featuresDropdownToggle.style.setProperty('--content', 'url(images/icon-arrow-down.svg)');
    }
})

// show and hide the company dropdown menu
companyDropdownToggle.addEventListener('click', () => {

    var companyVisibility = companyDropdown.getAttribute('data-visible');
    
    if(companyVisibility === 'false') {
        companyDropdown.setAttribute('data-visible', true);
        companyDropdown.style.display = 'block';
        companyDropdownToggle.style.setProperty('--content', 'url(images/icon-arrow-up.svg)')
    } else {
        companyDropdown.setAttribute('data-visible', false);
        companyDropdown.style.display = 'none';
        companyDropdownToggle.style.setProperty('--content', 'url(images/icon-arrow-down.svg)')
    }
})