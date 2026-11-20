'use strict';

// Atualiza automaticamente o ano do rodapé.
const currentYear = document.getElementById('current-year');

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
