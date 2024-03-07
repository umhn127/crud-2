//local storage eklame
// localStorage.setItem("users", "the-uma");

//local storage alma
// console.log(localStorage.getItem("users"));

//localstorage e json formatına sokarak ekleme (JSON.stringify)
//

const localStorageKey = "users_list_1";

//localstorage den veriyi JSON olarak alma (JSON.parse)
let users = JSON.parse(localStorage.getItem(localStorageKey)) || [];

console.log(users);

//kullanıcı ekleme func.
function addUser() {
  const name = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  if (name == "") {
    alert("Username giriniz...");
  } else if (email == "") {
    alert("Email giriniz...");
  } else {
    const Users = users.find((user) => user.email === email);
    if (Users) {
      Users.name = name;
    } else {
      users.push({ name, email });
    }

    localStorage.setItem(localStorageKey, JSON.stringify(users));
  }

  console.log(localStorage.getItem(localStorageKey));
}

//kullanıcıları görüntüleme
function displayUsers() {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";
  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
     Kullanıcı Adı : ${user.name}
     <br>
     E-posta : ${user.email}

     <button onclick="editUser('${user.email}')">Düzenle</button>
     <button onclick="deleteUser('${user.email}')">Sil</button>
     <div>-----------------------------</div>
    `;

    userList.appendChild(listItem);
  });
}
displayUsers();

//edituser
function editUser(email) {
  //önceden kayıtlı mail var mı kontrol
  const userToEdit = users.find((user) => user.email === email);

  if (userToEdit) {
    document.getElementById("username").value = userToEdit.name;
    document.getElementById("email").value = userToEdit.email;
  }
}

//deleteuser
function deleteUser(email) {
  users = users.filter((user) => user.email !== email);
  localStorage.setItem(localStorageKey, JSON.stringify(users));
  displayUsers();
}

function Clear() {
  localStorage.clear();
}
