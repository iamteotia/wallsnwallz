document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.search-glass input');
    const clearBtn = document.querySelector('.clear-btn');

    function toggleClear() {
        if (input.value.length > 0) {
            clearBtn.classList.add('visible');
        } else {
            clearBtn.classList.remove('visible');
        }
    }

    input.addEventListener('input', toggleClear);

    clearBtn.addEventListener('click', () => {
        input.value = '';
        input.focus();
        toggleClear();
    });

    const searchGlass = document.querySelector('.search-glass');
    input.addEventListener('focus', () => {
        searchGlass.style.transform = 'scale(1.01)';
    });
    input.addEventListener('blur', () => {
        searchGlass.style.transform = 'scale(1)';
    });
});
