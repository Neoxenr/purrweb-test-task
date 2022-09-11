const prevArrow = document.querySelector(".slider__arrow-prev");
const nextArrow = document.querySelector(".slider__arrow-next");

const sliderList = document.querySelector(".slider__list");

const firstSlide = sliderList.firstElementChild;
const lastSlide = sliderList.lastElementChild;

const imageWidth = firstSlide.offsetWidth;

const countImages = sliderList.childElementCount;

const startPosition = -imageWidth;
const endPosition = -imageWidth * (countImages + 1);

const dotsList = document.querySelector(".slider__dots");

export {
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
};
