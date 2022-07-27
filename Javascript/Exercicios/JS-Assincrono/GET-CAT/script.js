const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

const getCats = async () => {
  const response = await fetch(BASE_URL)
  const cats = await response.json();
  return cats[0].url;
};

const loadImg = async () => document.getElementById('cat').src = `${await getCats()}`

document.getElementById('change-cat').addEventListener('click', loadImg);

window.onload = loadImg();