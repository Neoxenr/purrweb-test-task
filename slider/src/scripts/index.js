import {
  prevArrow,
  nextArrow,
  sliderList,
  firstSlide,
  lastSlide,
  dotsList,
  imageWidth,
  countImages,
  startPosition,
  endPosition,
} from "./const.js";

sliderList.insertAdjacentElement("afterbegin", lastSlide.cloneNode(true));
sliderList.insertAdjacentElement("beforeend", firstSlide.cloneNode(true));

let position = -imageWidth;

sliderList.style.marginLeft = position + "px";

for (let i = 0; i < countImages; i++) {
  dotsList.insertAdjacentHTML(
    "beforeend",
    `<li class='list__item'><button class='slider__dot-btn'>${
      i + 1
    }</button></li>`
  );
}

let currentIndex = 1;

dotsList.childNodes[currentIndex - 1].firstElementChild.style.opacity = "0.75";

let isAnimating = false;

function shiftSlide(direction, count = 1, type = "slow") {
  isAnimating = true;

  if (direction === "prev" && position === startPosition) {
    position = endPosition;
  } else if (direction === "next" && position === endPosition) {
    position = startPosition;
  }

  let animationTime = 0;
  let animationRate = 0;

  if (type === "slow") {
    animationTime = 560;
    animationRate = 10;
  } else if (type === "fast") {
    animationTime = 140;
    animationRate = 2.5;
  }

  let timePassed = 0;

  const timer = setInterval(() => {
    timePassed += 10;

    if (timePassed > animationTime * count) {
      if (direction === "prev") {
        position += imageWidth * count;
      } else if (direction === "next") {
        position -= imageWidth * count;
      }

      dotsList.childNodes[currentIndex - 1].firstElementChild.style.opacity =
        "0.25";

      currentIndex = Math.abs(position / imageWidth);
      currentIndex = currentIndex > countImages ? 1 : currentIndex;

      dotsList.childNodes[currentIndex - 1].firstElementChild.style.opacity =
        "0.75";

      clearInterval(timer);

      setTimeout(() => {
        isAnimating = false;
      }, 50);

      return;
    }

    if (direction === "prev") {
      sliderList.style.marginLeft =
        position + (timePassed / animationRate) * 10 + "px";
    } else if (direction === "next") {
      sliderList.style.marginLeft =
        position - (timePassed / animationRate) * 10 + "px";
    }
  }, 10);
}

function shiftSlideByDot(event) {
  const clickedIndex = +event.target.innerHTML;

  if (currentIndex === clickedIndex) {
    return;
  }

  if (currentIndex < clickedIndex) {
    shiftSlide("next", clickedIndex - currentIndex, "fast");
  } else {
    shiftSlide("prev", currentIndex - clickedIndex, "fast");
  }
}

dotsList.addEventListener("click", (event) => {
  if (!isAnimating && event.target.tagName === "BUTTON") {
    shiftSlideByDot(event);
  }
});

prevArrow.addEventListener("click", () => {
  if (!isAnimating) {
    shiftSlide("prev");
  }
});
nextArrow.addEventListener("click", () => {
  if (!isAnimating) {
    shiftSlide("next");
  }
});
