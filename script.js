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
console.log(buttonLocalStorage[0].orignalKey);
//audios

//e,r,f,g,v,b,h,j,i,k

function mainWorkFlow() {
  console.log("oi");
  console.log(localStorage);
  console.log(buttonLocalStorage.editedKey);
  if (localStorage.length > 0) {
    const buttonLocalStorageString = localStorage.getItem("buttonLocalStorage");
    const buttonLocalStorageObj = JSON.parse(buttonLocalStorageString);
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
    console.log("cheguei1");

    document.onkeydown = (e) => {
      const key = e.key;
      console.log("cheguei");
      buttonLocalStorageObj.map((button) => {
        console.log(button.editedKey);
        console.log(button);
        if (button.editedKey === key) {
          playAudioKey(button.orignalKey);
          if (button.orignalKey === "i" || button.orignalKey === "k") {
            hithatLeft.src = "img/crash.png";
          }
          if (button.orignalKey === "e" || button.orignalKey) {
            hithatRight.src = "img/crash.png";
          }
          console.log(key);
        } else {
          if (key === "i" || key === "k") {
            hithatLeft.src = "img/crash.png";
          }
          if (key === "e" || key === "r") {
            hithatRight.src = "img/crash.png";
          }
          console.log(key);
          playAudioKey(key);
        }
      });
    };

    //

    document.onkeyup = (e) => {
      const key = e.key;
      buttonLocalStorageObj.map((button) => {
        if (button.editedKey === key) {
          if (button.orignalKey === "i" || button.orignalKey === "k") {
            hithatLeft.src = "img/hihat-top.png";
          }
          if (button.orignalKey === "e" || button.orignalKey) {
            hithatRight.src = "img/hihat-top.png";
          }
        } else {
          if (key === "i" || key === "k") {
            hithatLeft.src = "img/hihat-top.png";
          }
          if (key === "e" || key === "r") {
            hithatRight.src = "img/hihat-top.png";
          }
        }
      });
    };
  } else {
    // esses botoes tinham um id botao
    console.log("Retorna as keys normais");

    console.log(buttonLocalStorage);

    buttonLocalStorage.map((buttonLocalStorage) => {
      putGeneratedButtons.innerHTML += `<span><button id="button">${buttonLocalStorage.orignalKey.toUpperCase()}</button> <p>${
        buttonLocalStorage.soundName
      }</p></span>`;

      console.log(putGeneratedButtons.appendChild(spanElement));
    });
  }

  document.onkeydown = (e) => {
    const key = e.key;

    buttonLocalStorage.map((button) => {
      if (button.editedKey === key) {
        playAudioKey(button.orignalKey);
        if (button.orignalKey === "i" || button.orignalKey === "k") {
          hithatLeft.src = "img/crash.png";
        }
        if (button.orignalKey === "e" || button.orignalKey) {
          hithatRight.src = "img/crash.png";
        }
        console.log(key);
      } else {
        if (key === "i" || key === "k") {
          hithatLeft.src = "img/crash.png";
        }
        if (key === "e" || key === "r") {
          hithatRight.src = "img/crash.png";
        }

        playAudioKey(key);
      }
    });
  };
}
//
// buttons.map((buttons) => {
//   buttons.innerHTML = "Oi";
// });

// function getKeysEdited() {
//   inputEdit.map((inputEdit) => {
//     console.log(inputEdit);
//   });
// }

document.onkeyup = (e) => {
  const key = e.key;
  buttonLocalStorage.map((button) => {
    if (button.editedKey === key) {
      if (button.orignalKey === "i" || button.orignalKey === "k") {
        hithatLeft.src = "img/hihat-top.png";
      }
      if (button.orignalKey === "e" || button.orignalKey) {
        hithatRight.src = "img/hihat-top.png";
      }
    } else {
      if (key === "i" || key === "k") {
        hithatLeft.src = "img/hihat-top.png";
      }
      if (key === "e" || key === "r") {
        hithatRight.src = "img/hihat-top.png";
      }
    }
  });
};

function playAudioKey(key) {
  audio.map((audio) => {
    if (key === audio.accessKey) {
      audio.play(audio.src);
      audio.currentTime = 0;
      console.log(audio.accessKey);
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
  let index = 0;
  inputEdit.map((inputEdit) => {
    let input = inputEdit.value;
    buttonLocalStorage[index].editedKey = input;
    console.log(input);
    index++;
    console.log(buttonLocalStorage);
    console.log(buttonLocalStorage.editedKey);
  });
  localStorage.setItem(
    "buttonLocalStorage",
    JSON.stringify(buttonLocalStorage)
  );
  mainWorkFlow();
});

function cleanInput() {
  console.log("vouLimpar");
  buttonLocalStorage.map((buttonLocalStorage) => {
    buttonLocalStorage.orignalKey = "";
  });
  console.log(buttonLocalStorage);
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
