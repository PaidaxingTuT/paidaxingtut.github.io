// Graduation date: December 27, 2025, Japan Time
const graduationDate = new Date('2025-12-27T00:00:00+09:00');

function updateDayCounter() {
    const now = new Date();
    const diffTime = Math.abs(now - graduationDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const numberElement = document.getElementById('day-counter-number');
    if (numberElement) {
        numberElement.textContent = diffDays;
    }
    document.title = `天音彼方 毕业纪念 - Day ${diffDays}`;
}

document.addEventListener('DOMContentLoaded', () => {
    updateDayCounter();
    setInterval(updateDayCounter, 60000);
});

updateDayCounter();
