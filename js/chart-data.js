document.addEventListener('DOMContentLoaded', function() {
    // Função para criar um gráfico de pizza
    function createPieChart(elementId, labels, values, title) {
        const data = [{
            values: values,
            labels: labels,
            type: 'pie',
            hoverinfo: 'label+percent',
            textinfo: 'percent',
            marker: {
                colors: ['#3498DB', '#2ECC71', '#E67E22', '#9B59B6', '#F1C40F'] // Cores personalizadas
            }
        }];

        const layout = {
            title: title,
            height: 350,
            margin: { t: 40, b: 20, l: 20, r: 20 },
            showlegend: true,
            legend: {
                orientation: "h",
                x: 0,
                y: -0.2
            }
        };

        Plotly.newPlot(elementId, data, layout, {responsive: true});
    }

    // Função para criar um gráfico de barras
    function createBarChart(elementId, xData, yData, title, xTitle, yTitle) {
        const data = [{
            x: xData,
            y: yData,
            type: 'bar',
            marker: {
                color: '#3498DB' // Cor padrão para barras
            }
        }];

        const layout = {
            title: title,
            xaxis: { title: xTitle },
            yaxis: { title: yTitle },
            height: 350,
            margin: { t: 40, b: 80, l: 40, r: 20 } // Ajuste para rótulos longos
        };

        Plotly.newPlot(elementId, data, layout, {responsive: true});
    }

    // --- Perfil Demográfico ---

    // Gênero
    const generoLabels = ['Feminino', 'Masculino'];
    const generoValues = [43, 24];
    createPieChart('chart-genero', generoLabels, generoValues, 'Distribuição por Gênero');

    // Situação de Estudo
    const estudoLabels = ['Não Estudam', 'Escola Regular', 'Curso Técnico/Pré-vestibular'];
    const estudoValues = [43, 21, 2];
    createBarChart('chart-estudo', estudoLabels, estudoValues, 'Situação de Estudo', 'Situação', 'Nº de Participantes');

    // Situação de Trabalho
    const trabalhoLabels = ['Período Integral', 'Não Trabalham', 'Meio Período'];
    const trabalhoValues = [41, 23, 2];
    createBarChart('chart-trabalho', trabalhoLabels, trabalhoValues, 'Situação de Trabalho', 'Situação', 'Nº de Participantes');

    // Faixa Etária (focando nas mais frequentes)
    const idadeLabels = ['13 anos', '54 anos', '36 anos', '41 anos', '47 anos', 'Outras Idades'];
    const idadeValues = [17, 4, 3, 3, 3, 67 - (17 + 4 + 3 + 3 + 3)]; // Calcula "Outras Idades"
    createBarChart('chart-idade', idadeLabels, idadeValues, 'Faixa Etária dos Participantes', 'Idade', 'Nº de Participantes');

    // --- Padrões de Hábitos Alimentares ---

    // Frequência de Refeições Diárias
    const refeicoesLabels = ['3 ou 4 refeições', '1 ou 2 refeições', 'Mais de 4 refeições'];
    const refeicoesValues = [51, 13, 3];
    createBarChart('chart-refeicoes', refeicoesLabels, refeicoesValues, 'Frequência de Refeições Diárias', 'Frequência', 'Nº de Participantes');

    // Alimentos Mais Presentes na Rotina (Nota: soma > 100% pois puderam citar mais de um)
    const alimentosPresentesLabels = ['Alimentos feitos em casa', 'Frutas e vegetais', 'Lanches rápidos/ultraprocessados', 'Fast food'];
    const alimentosPresentesValues = [61, 20, 17, 5];
    createBarChart('chart-alimentos-presentes', alimentosPresentesLabels, alimentosPresentesValues, 'Alimentos Mais Presentes na Rotina', 'Tipo de Alimento', 'Nº de Participantes');

    // --- Consumo de Alimentos Ultraprocessados ---

    // Frequência de Consumo de Ultraprocessados
    const ultraprocessadosLabels = ['2 a 3 vezes/semana', '4 a 5 vezes/semana', '1 vez/semana', 'Quase nunca', 'Mais que 5 vezes/semana'];
    const ultraprocessadosValues = [21, 16, 13, 11, 6];
    createBarChart('chart-ultraprocessados', ultraprocessadosLabels, ultraprocessadosValues, 'Frequência de Consumo de Ultraprocessados', 'Frequência', 'Nº de Participantes');

    // --- Refeições Fora de Casa ---

    // Frequência de Refeições Fora de Casa
    const refeicoesForaLabels = ['2 a 3 vezes/semana', '1 vez/semana', 'Quase Nunca', '4 a 5 vezes/semana', 'Todos os dias'];
    const refeicoesForaValues = [30, 22, 9, 3, 3];
    createBarChart('chart-refeicoes-fora', refeicoesForaLabels, refeicoesForaValues, 'Frequência de Refeições Fora de Casa', 'Frequência', 'Nº de Participantes');

    // --- Fatores de Influência nas Escolhas Alimentares ---

    // Fatores Mais Influentes (Nota: soma > 100% pois puderam citar mais de um)
    const fatoresInfluenciaLabels = ['Meu próprio gosto pessoal', 'Família', 'Propagandas e redes sociais', 'Amigos'];
    const fatoresInfluenciaValues = [45, 37, 13, 11];
    createBarChart('chart-fatores-influencia', fatoresInfluenciaLabels, fatoresInfluenciaValues, 'Fatores Mais Influentes nas Escolhas Alimentares', 'Fator', 'Nº de Participantes');

    // Percepção da Influência Familiar
    const influenciaFamiliarLabels = ['Sim, bastante', 'Um pouco', 'Não'];
    const influenciaFamiliarValues = [29, 27, 11];
    createPieChart('chart-influencia-familiar', influenciaFamiliarLabels, influenciaFamiliarValues, 'Percepção da Influência Familiar');
});