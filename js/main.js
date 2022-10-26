/*
Задание:
Сделать рабочий фильтр цветов.
При нажатии на один из цветов, круг с цветом - мы видим автомобиль, соответствующего цвета.
А активный цвет выделяется, за счет дополнительного CSS класса ".colorItem--active".

Работу сдать через CodePen.

Другие изображения автомобиля:
https://webcademy.ru/files/js2020/solaris/black.png
https://webcademy.ru/files/js2020/solaris/blue.png
https://webcademy.ru/files/js2020/solaris/graphite.png
https://webcademy.ru/files/js2020/solaris/orange.png
https://webcademy.ru/files/js2020/solaris/red.png
https://webcademy.ru/files/js2020/solaris/white.png
https://webcademy.ru/files/js2020/solaris/white-pure.png
*/

document.addEventListener("DOMContentLoaded", function() {

  const img = document.querySelector(".imgHolder img");
  const colorsSelector = document.querySelector("#colorsSelector");
  const colorItems = document.querySelectorAll(".colorItem");

  colorsSelector.addEventListener("click", function(e) {
    const path = "https://webcademy.ru/files/js2020/solaris/";

    for (let item of colorItems) {
      if (!e.target.classList.contains("colorsSelector"))
      item.classList.remove("colorItem--active");
    }

    if (e.target.classList.contains("colorBlue")) {
      img.src = path + "blue.png";
    } else if (e.target.classList.contains("colorWhite")) {
        img.src = path + "white.png";
      } else if (e.target.classList.contains("colorRed")) {
        img.src = path + "red.png";
      } else if (e.target.classList.contains("colorBlack")) {
        img.src = path + "black.png";
      } else if (e.target.classList.contains("colorWhitePure")) {
        img.src = path + "white-pure.png";
      } else if (e.target.classList.contains("colorOrange")) {
        img.src = path + "orange.png";
      } else if (e.target.classList.contains("colorGraphite")) {
        img.src = path + "graphite.png";
      }

      if (e.target.classList.contains("colorItem")) {
        e.target.classList.add("colorItem--active");
      }
  });

});
