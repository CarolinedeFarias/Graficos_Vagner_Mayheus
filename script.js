// Primeiro gráfico
const ctxPizza1 = document.getElementById('graficoPizza1').getContext('2d');
const graficoPizza1 = new Chart(ctxPizza1, {
    type: 'pie',
    data: {
        labels: ['Sim', 'Não'],
        datasets: [{
            label: 'Você trabalha?',
            data: [79, 21],
            backgroundColor: ['#F05454', '#30475E'],
            borderColor: '#DDDDDD',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' },
            title: { display: true, text: 'Você trabalha?' }
        }
    }
});

// Segundo gráfico
const ctxPizza2 = document.getElementById('graficoPizza2').getContext('2d');
const graficoPizza2 = new Chart(ctxPizza2, {
    type: 'pie',
    data: {
        labels: ['Administrativo', 'Técnico', 'Gerencial', 'Outros'],
        datasets: [{
            label: 'Qual é a sua ocupação?',
            data: [10, 6, 0, 84],
            backgroundColor: ['#F05454', '#30475E', '#DDDDDD', '#222831'],
            borderColor: '#DDDDDD',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' },
            title: { display: true, text: 'Qual é a sua ocupação?' }
        }
    }
});

// Terceiro gráfico
const ctxPizza3 = document.getElementById('graficoPizza3').getContext('2d');
const graficoPizza3 = new Chart(ctxPizza3, {
    type: 'pie',
    data: {
        labels: ['Menos de 20', '21 a 40', '41 a 60', '60 ou mais'],
        datasets: [{
            label: 'Quantas horas você trabalha por semana?',
            data: [57, 43, 0, 0],
            backgroundColor: ['#F05454', '#30475E', '#DDDDDD', '#222831'],
            borderColor: '#DDDDDD',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' },
            title: { display: true, text: 'Quantas horas você trabalha por semana?' }
        }
    }
});

// Quarto gráfico
const ctxPizza4 = document.getElementById('graficoPizza4').getContext('2d');
const graficoPizza4 = new Chart(ctxPizza4, {
    type: 'pie',
    data: {
        labels: ['Muito satisfeito', 'Satisfeito', 'Neutro', 'Insatisfeito'],
        datasets: [{
            label: 'Qual é o seu nível de satisfação no trabalho?',
            data: [26, 10, 52, 12],
            backgroundColor: ['#F05454', '#30475E', '#DDDDDD', '#222831'],
            borderColor: '#DDDDDD',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' },
            title: { display: true, text: 'Qual é o seu nível de satisfação no trabalho?' }
        }
    }
});

// Quinto gráfico
const ctxPizza5 = document.getElementById('graficoPizza5').getContext('2d');
const graficoPizza5 = new Chart(ctxPizza5, {
    type: 'pie',
    data: {
        labels: ['Remoto', 'Presencial', 'Híbrido'],
        datasets: [{
            label: 'Qual é o seu tipo de trabalho?',
            data: [5, 95, 0],
            backgroundColor: ['#F05454', '#30475E', '#DDDDDD', '#222831'],
            borderColor: '#DDDDDD',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' },
            title: { display: true, text: 'Qual é o seu tipo de trabalho?' }
        }
    }
});

// Sexto gráfico
const ctxPizza6 = document.getElementById('graficoPizza6').getContext('2d');
const graficoPizza6 = new Chart(ctxPizza6, {
    type: 'pie',
    data: {
        labels: ['Sim', 'Não'],
        datasets: [{
            label: 'Você participa de treinamentos anualmente?',
            data: [85, 15],
            backgroundColor: ['#F05454', '#30475E', '#DDDDDD', '#222831'],
            borderColor: '#DDDDDD',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' },
            title: { display: true, text: 'Você participa de treinamentos anualmente?' }
        }
    }
});
