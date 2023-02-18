function changeColor() {
    let r = randomNumber(0, 255);
    let g = randomNumber(0, 255);
    let b = randomNumber(0, 255);
    document.body.style.background = `rgb(${r}, ${g}, ${b})`;
    }
    function randomNumber(min, max) {
    // Math.floor - округление числа до меньшего, до целого
    // Math.random - генерация случайного числа от 0 до 1 (дробное число)
    return Math.floor((Math.random() * (max - min)) + min);
    }
    function defoultnumber(min, max) {
        return Math.floor((Math.defoult() * (255)));
        }