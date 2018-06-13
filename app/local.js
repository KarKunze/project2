
// let time = document.getElementById('time');
// let menu = document.getElementById('menu');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let ten = document.getElementById('ten');
let eleven = document.getElementById('eleven');
let twelve = document.getElementById('twelve');
let url = "https://entree-s18.herokuapp.com/v1/menu/12";
let apiRequest;

getMenu(url);

function getMenu() {
  apiRequest = new XMLHttpRequest();
  apiRequest.onload = catchResponse;
  // apiRequest.onerror = httpRequestOnError;
  apiRequest.open('get', url, true);
  apiRequest.send();
}


function catchResponse() {

  if (apiRequest.statusText === "OK") {
    let response = JSON.parse(apiRequest.responseText);
    localStorage.setItem(menuList, apiRequest.responseText);
  }
}

function getMenu(){
  	if (localStorage.getItem("menuList")) {
      menuList = JSON.parse(localStorage.getItem("menuList"));

      date.innerHTML = "Updated on " + readableDate(menuList.created_at.date);
      one.innerHTML = menuList.menu_items[0].description;
      two.innerHTML = menuList.menu_items[1].description;
      three.innerHTML = menuList.menu_items[2].description;
      four.innerHTML = menuList.menu_items[3].description;
      five.innerHTML = menuList.menu_items[4].description;
      six.innerHTML = menuList.menu_items[5].description;
      seven.innerHTML = menuList.menu_items[6].description;
      eight.innerHTML = menuList.menu_items[7].description;
      nine.innerHTML = menuList.menu_items[8].description;
      ten.innerHTML = menuList.menu_items[9].description;
      eleven.innerHTML = menuList.menu_items[10].description;
      twelve.innerHTML = menuList.menu_items[11].description;

    }else{
      response = JSON.parse(apiRequest.responseText);

      date.innerHTML = "Updated on " + readableDate(response.created_at.date);
      one.innerHTML = response.menu_items[0].description;
      two.innerHTML = response.menu_items[1].description;
      three.innerHTML = response.menu_items[2].description;
      four.innerHTML = response.menu_items[3].description;
      five.innerHTML = response.menu_items[4].description;
      six.innerHTML = response.menu_items[5].description;
      seven.innerHTML = response.menu_items[6].description;
      eight.innerHTML = response.menu_items[7].description;
      nine.innerHTML = response.menu_items[8].description;
      ten.innerHTML = response.menu_items[9].description;
      eleven.innerHTML = response.menu_items[10].description;
      twelve.innerHTML = response.menu_items[11].description;
    }
  }


    function readableDate(dateCreated) {
      // console.log("readableDate");
      dateCreated = dateCreated.split(" ");
      // console.log(dateCreated);
      dateCreated = dateCreated[0];
      // console.log(dateCreated);
      dateCreated = dateCreated.split("-");
      // console.log(dateCreated);
      return dateCreated[1] + "-" + dateCreated[2] + "-" + dateCreated[0];
    }
