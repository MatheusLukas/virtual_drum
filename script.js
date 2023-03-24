const hithatRight = document.querySelector("#hithat-right");
const hithatLeft = document.querySelector("#hithat-left");
const button = document.querySelector("#btn");
const audio = Array.from(document.querySelectorAll("audio"));
const buttons = Array.from(document.querySelectorAll("#button"));
const buttonModal = document.querySelector(".input_edit");
const inputEdit = Array.from(document.querySelectorAll(".key_edit")); //
const inputConfirmEdit = document.querySelector("#confirmKeys"); //
const putGeneratedButtons = document.querySelector("#putGeneratedButtons");
const spanElement = document.createElement("span");

const buttonLocalStorage = [];

audio.map((audio) => {
  return buttonLocalStorage.push({
    orignalKey: audio.accessKey,
    editedKey: "",
    soundName: audio.title,
  });
});
// console.log(buttonLocalStorage[0].orignalKey);
//audios

//e,r,f,g,v,b,h,j,i,k

function mainWorkFlow() {
  // console.log("oi");
  // console.log(localStorage);
  // console.log(buttonLocalStorage.editedKey);
  const buttonLocalStorageString = localStorage.getItem("buttonLocalStorage");
  const buttonLocalStorageObj = JSON.parse(buttonLocalStorageString);
  if (localStorage.length > 0) {
    inputEdit.map(
      (input, index) => (input.value = buttonLocalStorageObj[index].editedKey)
    );

    // console.log("Bem aqui", buttonLocalStorageObj);

    // console.log(`Local Storage:`);
    // console.log(localStorage);
    // console.log(`teste:`);
    // console.log(localStorage);
    // console.log(`retornando: `);
    // console.log(buttonLocalStorageObj);
    // console.log(`normal:`);
    // console.log(buttonLocalStorage);
    // console.log("Vai retornar as keys editadas");
    // console.log(buttonLocalStorageObj);
    putGeneratedButtons.innerHTML = "";
    buttonLocalStorageObj.map((buttonLocalStorageObj) => {
      putGeneratedButtons.innerHTML += `<span><button id="button">${buttonLocalStorageObj.editedKey.toUpperCase()}</button> <p>${
        buttonLocalStorageObj.soundName
      }</p></span>`;
    });

    //
    // console.log("cheguei1");

    //
  } else {
    // esses botoes tinham um id botao
    // console.log("Retorna as keys normais");

    // console.log(buttonLocalStorage);

    buttonLocalStorage.map((buttonLocalStorage) => {
      putGeneratedButtons.innerHTML += `<span><button id="button">${buttonLocalStorage.orignalKey.toUpperCase()}</button> <p>${
        buttonLocalStorage.soundName
      }</p></span>`;

      // console.log(putGeneratedButtons.appendChild(spanElement));
    });
  }

  document.onkeydown = (e) => {
    const modal = document.querySelector(".modal");
    const actualStyle = modal.style.display;
    if (actualStyle === "block") return;
    const key = e.key;
    const buttonLocalStorageString = localStorage.getItem("buttonLocalStorage");
    const buttonLocalStorageObj = JSON.parse(buttonLocalStorageString);

    if (localStorage.length === 0) {
      buttonLocalStorage.map((button) => {
        if (button.orignalKey.toLowerCase() === key.toLowerCase()) {
          playAudioKey(button.orignalKey);
          if (
            button.orignalKey.toLowerCase() === "i" ||
            button.orignalKey.toLowerCase() === "k"
          ) {
            hithatLeft.src = "img/crash.png";
          }
          if (
            button.orignalKey.toLowerCase() === "e" ||
            button.orignalKey.toLowerCase() === "r"
          ) {
            hithatRight.src = "img/crash.png";
          }
          // console.log(key);
        } else {
          if (key.toLowerCase() === "i" || key.toLowerCase() === "k") {
            hithatLeft.src = "img/crash.png";
          }
          if (key.toLowerCase() === "e" || key.toLowerCase() === "r") {
            hithatRight.src = "img/crash.png";
          }

          playAudioKey(key);
        }
      });
    } else {
      buttonLocalStorageObj.map((button) => {
        if (button.editedKey.toLowerCase() === key.toLowerCase()) {
          playAudioKey(button.orignalKey);
          if (
            button.orignalKey.toLowerCase() === "i" ||
            button.orignalKey.toLowerCase() === "k"
          ) {
            hithatLeft.src = "img/crash.png";
          }
          if (
            button.orignalKey.toLowerCase() === "e" ||
            button.orignalKey.toLowerCase() === "r"
          ) {
            hithatRight.src = "img/crash.png";
          }
          // console.log(key);
        } else {
          if (key.toLowerCase() === "i" || key.toLowerCase() === "k") {
            hithatLeft.src = "img/crash.png";
          }
          if (key.toLowerCase() === "e" || key.toLowerCase() === "r") {
            hithatRight.src = "img/crash.png";
          }

          playAudioKey(key);
        }
      });
    }
  };
}

//

document.onkeyup = (e) => {
  const key = e.key;
  const buttonLocalStorageString = localStorage.getItem("buttonLocalStorage");
  const buttonLocalStorageObj = JSON.parse(buttonLocalStorageString);
  if (localStorage.length === 0) {
    buttonLocalStorage.map((button) => {
      if (button.orignalKey.toLowerCase() === key.toLowerCase()) {
        if (
          button.orignalKey.toLowerCase() === "i" ||
          button.orignalKey.toLowerCase() === "k"
        ) {
          hithatLeft.src = "img/hihat-top.png";
        }
        if (
          button.orignalKey.toLowerCase() === "e" ||
          button.orignalKey.toLowerCase()
        ) {
          hithatRight.src = "img/hihat-top.png";
        }
        // console.log(key);
      } else {
        if (key.toLowerCase() === "i" || key.toLowerCase() === "k") {
          hithatLeft.src = "img/hihat-top.png";
        }
        if (key.toLowerCase() === "e" || key.toLowerCase() === "r") {
          hithatRight.src = "img/hihat-top.png";
        }
      }
    });
  } else {
    buttonLocalStorageObj.map((button) => {
      if (button.editedKey.toLowerCase() === key.toLowerCase()) {
        if (
          button.orignalKey.toLowerCase() === "i" ||
          button.orignalKey.toLowerCase() === "k"
        ) {
          hithatLeft.src = "img/hihat-top.png";
        }
        if (
          button.orignalKey.toLowerCase() === "e" ||
          button.orignalKey.toLowerCase() === "r"
        ) {
          hithatRight.src = "img/hihat-top.png";
        }
      } else {
        if (key.toLowerCase() === "i" || key.toLowerCase() === "k") {
          hithatLeft.src = "img/hihat-top.png";
        }
        if (key.toLowerCase() === "e" || key.toLowerCase() === "r") {
          hithatRight.src = "img/hihat-top.png";
        }
      }
    });
  }
};

function playAudioKey(key) {
  audio.map((audio) => {
    if (key === audio.accessKey) {
      audio.play(audio.src);
      audio.currentTime = 0;
      // console.log(audio.accessKey);
    }
  });
}

// function textButton(values) {
//   buttons.map((buttons) => {
//     buttons.innerHTML = values;
//   });
// }

function switchModal() {
  const modal = document.querySelector(".modal");
  const actualStyle = modal.style.display;
  if (actualStyle === "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
}
//
buttonModal.addEventListener("click", switchModal);
inputConfirmEdit.addEventListener("click", (e) => {
  inputEdit.map((inputEdit, index) => {
    let input = inputEdit.value;
    buttonLocalStorage[index].editedKey = input;
    // console.log(input);
    index++;
    // console.log(buttonLocalStorage);
    // console.log(buttonLocalStorage.editedKey);
  });

  localStorage.setItem(
    "buttonLocalStorage",
    JSON.stringify(buttonLocalStorage)
  );
  switchModal();
  mainWorkFlow();
});

function cleanInput() {
  // console.log("vouLimpar");
  buttonLocalStorage.map((buttonLocalStorage) => {
    buttonLocalStorage.orignalKey = "";
  });
  // console.log(buttonLocalStorage);
}

window.onclick = (e) => {
  const modal = document.querySelector(".modal");
  if (e.target == modal) {
    switchModal();
  }
};

// getKeysEdited();
playAudioKey();

mainWorkFlow();
