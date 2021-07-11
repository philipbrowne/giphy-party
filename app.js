const form = document.getElementById('giphyform');
const searchInput = document.getElementById('searchinput');
const searchBtn = document.getElementById('searchbtn');
const removeBtn = document.getElementById('removebtn');
const imgDiv = document.getElementById('images');

async function getImg(q) {
  const giphyObject = {
    q,
    api_key: 'SefRxg9GczzVc4GjXaYZ08JbrQRRK3Cd',
  };
  const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
    params: giphyObject,
  });
  const randNum = Math.floor(Math.random() * res.data.data.length);
  const imgURL = res.data.data[randNum].images.original.url;
  const newImg = document.createElement('img');
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('giphy');
  imgContainer.append(newImg);
  newImg.src = imgURL;
  imgDiv.append(imgContainer);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (searchInput.value) {
    getImg(searchInput.value);
  }
  searchInput.value = '';
});

removeBtn.addEventListener('click', function () {
  imgDiv.innerHTML = '';
});
