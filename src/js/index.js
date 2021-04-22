import './styles.css';
import { renderCountryCard, changingMarkupCountries } from './render-fetch';

const input = document.querySelector('.input');

const debounce = require('lodash.debounce');

const getListOfCountries = () => {
  let inputValue = input.value;
  const url = `https://restcountries.eu/rest/v2/name/${inputValue}`;
  if (!inputValue) {
    changingMarkupCountries('');
    return;
  }

  return fetch(url)
    .then(country => {
      return country.json();
    })
    .then(renderCountryCard)
    .catch(onFetcheError);
};

const onFetcheError = error => alert('Oops, something went wrong');

input.addEventListener('input', debounce(getListOfCountries, 1000));
