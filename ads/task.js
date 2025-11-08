document.addEventListener('DOMContentLoaded', () => {
    function rotate(speed) {
        let rotator = document.querySelector('.rotator');

        if (rotator) {
            let currentIndex = 0;
            let rotatorCases = rotator.querySelectorAll('.rotator__case');

            function showNextCase() {
                rotatorCases.forEach(rotator => {
                    rotator.classList.remove('rotator__case_active');
                })

                let currentCase = rotatorCases[currentIndex];
                let speed = currentCase.getAttribute('data-speed');
                let color = currentCase.getAttribute('data-color');

                currentCase.classList.add('rotator__case_active');
                currentCase.style.color = color;

                currentIndex = (currentIndex + 1) % rotatorCases.length;

                setTimeout(showNextCase, speed);
            }
            showNextCase()
        }
    }

    rotate(1000)
})