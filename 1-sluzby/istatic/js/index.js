// Текущая позиция слайда
let startPositionX = 0; 

// Все слайды
const tagsSlide = document.querySelectorAll('.slide'); 

// Общее количество слайдов
const totalSlides = tagsSlide.length; 

// Функция для показа следующего слайда
function showNextSlide() {
    // Переход к следующему слайду (циклично)
    startPositionX = (startPositionX + 1) % totalSlides; 
    
    // Рассчет смещения в процентах
    const offset = -startPositionX * 100; 
    
    // Применение смещения к каждому слайду
    tagsSlide.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`; 
    });
}

// Автоматическое переключение слайдов каждые 7 секунд
setInterval(showNextSlide, 7000); 
