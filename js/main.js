


const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');
const cardsRestaurants = document.querySelector('.cards-restaurants');
const containerPromo = document.querySelector('.container-promo');
const restaurants = document.querySelector('.restaurants');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');


let login = localStorage.getItem('whoLogged');



function toggleModal() {
  modal.classList.toggle("is-open");
}

function toggleModalAuth() {
  modalAuth.classList.toggle('is-open')
}


function authorized() {
  function logOut() {
    login = null;

    localStorage.removeItem('whoLogged');

    buttonAuth.style.display = '';
    userName.style.display = '';
    buttonOut.style.display = '';

    buttonOut.removeEventListener('click', logOut)

    checkAuth();

    }
  userName.textContent = login;

  buttonAuth.style.display = 'none';
  userName.style.display = 'inline';
  buttonOut.style.display = 'block';

  buttonOut.addEventListener('click', logOut)
}


function notAuthorized() { 
  function logIn(event) {
    event.preventDefault();
    if (loginInput.value.trim()) {
      login = loginInput.value;

    localStorage.setItem('whoLogged', login);

    toggleModalAuth();

    buttonAuth.removeEventListener('click', toggleModalAuth);
    closeAuth.removeEventListener('click', toggleModalAuth);
    logInForm.removeEventListener('submit', logIn);
    logInForm.reset();

    checkAuth();
    } else {
      alert('Введите логин');
    }

  }
  buttonAuth.addEventListener('click', toggleModalAuth);
  closeAuth.addEventListener('click', toggleModalAuth);
  logInForm.addEventListener('submit', logIn);
}

function checkAuth() {
  if (login) {
    authorized();
  } else {
    notAuthorized();
  }
}

checkAuth();


function createCardRestaurant () {

  const card = `
    <a href="restaurant.html" class="card card-restaurant">
              <img src="img/pizza-burger/preview.jpg" alt="image" class="card-image"/>
              <div class="card-text">
                <div class="card-heading">
                  <h3 class="card-title">PizzaBurger</h3>
                  <span class="card-tag tag">45 мин</span>
                </div>
                <div class="card-info">
                  <div class="rating">
                    4.5
                  </div>
                  <div class="price">От 700 ₽</div>
                  <div class="category">Пицца</div>
                </div>
              </div>
            </a>
    `;
    cardsRestaurants.insertAdjacentHTML('beforeend', card);
}

createCardRestaurant();
createCardRestaurant();
createCardRestaurant();

function createCardGoods() {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
        <a href="restaurant.html" class="card card-restaurant">
        <img src="img/pizza-burger/preview.jpg" alt="image" class="card-image"/>
        <div class="card-text">
          <div class="card-heading">
            <h3 class="card-title">PizzaBurger</h3>
            <span class="card-tag tag">45 мин</span>
          </div>
          <div class="card-info">
            <div class="rating">
              4.5
            </div>
            <div class="price">От 700 ₽</div>
            <div class="category">Пицца</div>
          </div>
        </div>
      </a>
        `;
}

function openGoods(event) {
  const target = event.target;

  const restaurant = target.closest('.card-restaurant');

  if (restaurant) {
    containerPromo.add('.hide');
    restaurants.add('.hide');
    menu.classList.remove('.hide');

  }

}



cartButton.addEventListener("click", toggleModal);

close.addEventListener("click", toggleModal);

cardsRestaurants.addEventListener('click', openGoods);

logo.addEventListener('click', function() {
  containerPromo.remove('.hide');
  restaurants.remove('.hide');
  menu.classList.add('.hide');
})