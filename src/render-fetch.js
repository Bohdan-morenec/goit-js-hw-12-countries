import countryCard from './templates/country-card.hbs';
import listCountryCard from './templates/list-country-card.hbs';

import { pnotifyEror } from './pop-up-error.js';

const countryBox = document.querySelector('.country-box');

function renderCountryCard(country) {
  const listCountry = listCountryCard(country);
  const renderCountry = countryCard(country[0]);
  const countryLength = country.length;

  if (countryLength <= 1) {
    changingMarkupCountries(renderCountry);
    return;
  }
  countryLength <= 10
    ? changingMarkupCountries(listCountry)
    : changingMarkupCountries('') || pnotifyEror();
}

const changingMarkupCountries = value => (countryBox.innerHTML = value);

export { renderCountryCard, changingMarkupCountries };
