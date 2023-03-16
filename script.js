const hithatRight = document.querySelector("#hithat-right");
const hithatLeft = document.querySelector("#hithat-left");
const button = document.querySelector("#btn");
const audio = Array.from(document.querySelectorAll("audio"));
const buttons = Array.from(document.querySelectorAll("#button"));
const buttonModal = document.querySelector(".input_edit");
const inputEdit = Array.from(document.querySelectorAll(".key_edit"));
const inputConfirmEdit = document.querySelector("#confirmKeys");

//audios

//e,r,f,g,v,b,h,j,i,k

function mainWorkFlow() {
  document.onkeydown = (e) => {
    const key = e.key;
    console.log(key);
    playAudioKey(key);

    if (key === "i" || key === "k") {
      hithatLeft.src = "img/crash.png";
    }
    if (key === "e" || key === "r") {
      hithatRight.src = "img/crash.png";
    }
  };
  buttons.map((buttons) => {
    buttons.innerHTML = "Oi";
  });

  function getKeysEdited() {
    inputEdit.map((inputEdit) => {
      console.log(inputEdit);
    });
  }

  document.onkeyup = (e) => {
    const key = e.key;
    if (key === "i" || key === "k") {
      hithatLeft.src = "img/hihat-top.png";
    }
    if (key === "e" || key === "r") {
      hithatRight.src = "img/hihat-top.png";
    }
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

  function textButton(values) {
    buttons.map((buttons) => {
      buttons.innerHTML = values;
    });
  }

  function switchModal() {
    const modal = document.querySelector(".modal");
    const actualStyle = modal.style.display;
    if (actualStyle === "block") {
      modal.style.display = "none";
    } else {
      modal.style.display = "block";
    }
  }

  buttonModal.addEventListener("click", switchModal);
  inputConfirmEdit.addEventListener("click", (e) => {
    let valuesArray;
    inputEdit.map((inputEdit) => {
      return (valuesArray = inputEdit.value);
    });
    console.log(valuesArray);
  });

  window.onclick = (e) => {
    const modal = document.querySelector(".modal");
    if (e.target == modal) {
      switchModal();
    }
  };

  getKeysEdited();
  playAudioKey();
}
mainWorkFlow();
