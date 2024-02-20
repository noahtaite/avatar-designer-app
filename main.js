import "./style.css";

window.onload = () => {
  if(sessionStorage.getItem("border_radius"))
  {
    document.getElementById("avatar").style.borderRadius = `${sessionStorage.getItem("border_radius")}px`;
    document.getElementById("slider").value = sessionStorage.getItem("border_radius");
  }
  if(sessionStorage.getItem("border_color"))
  {
    document.getElementById("avatar").style.borderColor = sessionStorage.getItem("border_color");
    document.getElementById("picker").value = sessionStorage.getItem("border_color");
  }
};

function adjustBorderRadius() {
  document.getElementById("slider").addEventListener("input", (event) => {
    const borderRadius = event.target.value;
    document.getElementById("avatar").style.borderRadius = `${borderRadius}px`;
    sessionStorage.setItem("border_radius", borderRadius)
  });
}

function adjustBorderColor() {
  document.getElementById("picker").addEventListener("input", (event) => {
    const borderColor = event.target.value;
    document.getElementById("avatar").style.borderColor = borderColor;
    sessionStorage.setItem("border_color", borderColor);
  });
}

function updateImage() {
  document.getElementById("button1").addEventListener("click", () => {
    const imgPath = document.getElementById("button1").dataset.img;
    document.getElementById("avatar").src = imgPath;
  });

  document.getElementById("button2").addEventListener("click", () => {
    const imgPath = document.getElementById("button2").dataset.img;
    document.getElementById("avatar").src = imgPath;
  });

  document.getElementById("button3").addEventListener("click", () => {
    const imgPath = document.getElementById("button3").dataset.img;
    document.getElementById("avatar").src = imgPath;
  });
}

function uploadFiles() {
  document.getElementById("fileInput").addEventListener("click",  () => {
    document.getElementById("fileInput").value = "";
  });
  document.getElementById("fileInput").addEventListener("change",  (event) => {
    const filePath = window.URL.createObjectURL(event.target.files[0])
    document.getElementById("avatar").src = filePath;
  });
}

adjustBorderRadius();
adjustBorderColor();
updateImage();
uploadFiles();