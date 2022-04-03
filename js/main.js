// Анимация появления
function onEntry(entry) {
    entry.forEach((change) => {
        if (change.isIntersecting) {
            change.target.classList.add('active');
        }
    });
}
let options = { threshold: [0.1] };
let observer = new IntersectionObserver(onEntry, options);

let elements = document.querySelectorAll('.anim-item');
elements.forEach((item) => {
    observer.observe(item);
});

let elements2 = document.querySelectorAll('.anim-item2');
elements2.forEach((item, i) => {
    setTimeout(function () {
        observer.observe(item);
    }, (i + 1) * 1000);
});

// Открытие и закрытие вопросов

const questions = document.querySelectorAll('.question_h3');

questions.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.classList.contains('closed')) {
            item.classList.remove('closed');
            item.classList.add('open');
        } else {
            item.classList.remove('open');
            item.classList.add('closed');
        }
    });
});
