const agroLearning = document.querySelector('.agro-learning');
const educativeLearning = document.querySelector('.educative-learning');
const farmersLearning = document.querySelector('.farmers-learning');

console.log(agroLearning,educativeLearning,farmersLearning);

const agroLearningContent = document.querySelector('.agro-learning-content');
const educativeContent = document.querySelector('.educative-forum-content');
const consumerContent = document.querySelector('.consumer-content');

(function () {
    agroLearningContent.classList.remove('switch');
    educativeContent.classList.add('switch');
    consumerContent.classList.add('switch');

    agroLearning.classList.add('switch-indicator');
    educativeLearning.classList.remove('switch-indicator');
    farmersLearning.classList.remove('switch-indicator');
  })();

agroLearning.addEventListener('click', (e) => {
    console.log(e);
    agroLearningContent.classList.remove('switch');
    educativeContent.classList.add('switch');
    consumerContent.classList.add('switch');

    agroLearning.classList.add('switch-indicator');
    educativeLearning.classList.remove('switch-indicator');
    farmersLearning.classList.remove('switch-indicator');
});

educativeLearning.addEventListener('click', (e) => {
    console.log(e);
    educativeContent.classList.remove('switch');
    agroLearningContent.classList.add('switch');
    consumerContent.classList.add('switch');

    agroLearning.classList.remove('switch-indicator');
    educativeLearning.classList.add('switch-indicator');
    farmersLearning.classList.remove('switch-indicator');
});

farmersLearning.addEventListener('click', (e) => {
    console.log(e);
    consumerContent.classList.remove('switch');
    agroLearningContent.classList.add('switch');
    educativeContent.classList.add('switch');

    agroLearning.classList.remove('switch-indicator');
    educativeLearning.classList.remove('switch-indicator');
    farmersLearning.classList.add('switch-indicator');
});