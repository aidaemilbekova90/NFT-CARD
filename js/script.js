document.body.style.backgroundColor = "hsl(217, 54%, 11%)";
document.body.style.fontFamily = "Outfit, sans-serif";
document.body.style.fontSize = "18px";
document.body.style.margin = "0";

// WRAPPER
const wrapper = document.createElement("div");
wrapper.id = "wrapper";
wrapper.style.margin = "0 auto";
wrapper.style.maxWidth = "1440px";
wrapper.style.display = "flex";
wrapper.style.justifyContent = "space-around";
wrapper.style.marginTop = "100px";
wrapper.style.marginBottom = "100px";

//card
function NFTCard() {
  const card = document.createElement("div");
  card.className = "card";
  card.style.padding = "15px 15px";
  card.style.borderRadius = "15px";
  card.style.backgroundColor = "hsl(216, 50%, 16%)";
  card.style.boxShadow =
    "2px 15px 28px rgba(0,0,0,0.25), 3px 10px 10px rgba(0,0,0,0.22)";

  // IMG
  const cardImg = document.createElement("img");
  cardImg.className = "card-image";
  cardImg.src = "./images/image-equilibrium.jpg";
  cardImg.style.maxWidth = "350px";
  cardImg.style.borderRadius = "10px";
  cardImg.style.marginBottom = "20px";

  // TITLE
  const title = document.createElement("h3");
  title.className = "card-title";
  title.innerText = "Equilibrium #3429";
  title.style.margin = "0";
  title.style.color = "hsl(0, 0%, 100%)";
  title.style.marginBottom = "20px";

  // SUBTITLE
  const subtitle = document.createElement("p");
  subtitle.className = "subtitle";
  subtitle.innerText = "Our Equilibrium collection promotes balance and calm.";
  subtitle.style.margin = "0";
  subtitle.style.maxWidth = "300px";
  subtitle.style.color = "hsl(215, 51%, 70%)";
  subtitle.style.lineHeight = "25px";
  subtitle.style.marginBottom = "17px";
  subtitle.style.fontSize = "300";

  // BUTTON
  const items = document.createElement("div");
  items.style.display = "flex";
  items.style.justifyContent = "space-between";

  const value = document.createElement("div");
  value.className = "card-value";

  const pseudoItem = document.createElement("img");
  pseudoItem.className = "value-icon";
  pseudoItem.src = "./images/icon-ethereum.svg";
  pseudoItem.style.marginRight = "5px";

  const valueText = document.createElement("p");
  valueText.className = "value-text";
  valueText.innerText = "0.041 ETH";
  valueText.style.margin = "0";
  valueText.style.display = "inline-block";
  valueText.style.color = "hsl(178, 100%, 50%)";
  valueText.style.fontWeight = "bold";

  const time = document.createElement("div");
  time.className = "time";
  time.style.display = "flex";
  time.style.alignItems = "center";
  time.style.marginBottom = "17px";

  const timeImg = document.createElement("img");
  timeImg.className = "time-img";
  timeImg.src = "./images/icon-clock.svg";
  timeImg.style.marginRight = "5px";

  const timeItem = document.createElement("time");
  timeItem.className = "time-item";
  timeItem.innerText = "3 days left";
  timeItem.style.color = "hsl(215, 51%, 70%)";

  const line = document.createElement("hr");
  line.style.borderColor = "hsl(215, 32%, 27%)";

  const user = document.createElement("div");
  user.className = "user";
  user.style.marginTop = "22px";
  user.style.display = "flex";
  user.style.alignItems = "center";

  const userImg = document.createElement("img");
  userImg.className = "avatar";
  userImg.src = "./images/image-avatar.png";
  userImg.style.maxWidth = "45px";
  userImg.style.marginRight = "15px";
  userImg.style.border = "2px solid white";
  userImg.style.borderRadius = "50%";

  let userText = document.createElement("span");
  userText.className = "user-txt";
  userText.innerText = "Creation of";
  userText.style.color = "hsl(215, 51%, 70%)";
  userText.style.textAlign = "center";

  let userName = document.createElement("span");
  userName.className = "userName";
  userName.innerText = " Jules Wyvern";
  userName.style.color = "white";

  document.body.appendChild(wrapper);
  wrapper.appendChild(card);
  card.appendChild(cardImg);
  card.appendChild(title);
  card.appendChild(subtitle);
  card.appendChild(items);
  items.appendChild(value);
  value.appendChild(pseudoItem);
  value.appendChild(valueText);
  items.appendChild(time);
  time.appendChild(timeImg);
  time.appendChild(timeItem);
  card.appendChild(line);
  card.appendChild(user);
  user.appendChild(userImg);
  user.appendChild(userText);
  userText.appendChild(userName);
}

NFTCard();

alert("Я оцениваю свою работу на 110 баллов");
