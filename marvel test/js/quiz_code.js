 window.onload = function () { 
    let result = {};
    let step = 0; // шаг вопроса
    function showQuestion(questionNumber) {
        document.querySelector('.question').innerHTML = quiz[step]['q']; // выводит вопрос
        let answer = '';
        for (let key in quiz[step]['a']) {
            answer += `<li data-v='${key}' class="answer-variant">${quiz[step]['a'][key]}</li>`; 
        }
        document.querySelector('.answer').innerHTML = answer; // вывод вариантов ответа

    }

    document.onclick = (event) => {
        event.stopPropagation();
        //голосование за героев
        if (event.target.classList.contains('answer-variant') && step < quiz.length) {
            // event.target.data
            if (result[event.target.dataset.v] != undefined) {
                result[event.target.dataset.v]++;
            }
            else {
                result[event.target.dataset.v] = 0;
            }
            step++; 
            // удаление вопросов при окончаниее вопросов
            if (step == quiz.length) {
                document.querySelector('.question').remove();
                document.querySelector('.answer').remove();
                showResult();
            }
            else {
            //переключатель вопросов
                showQuestion();
            }
        }
        if (event.target.classList.contains('reload-button')) {
            location.reload();
        }
    }

    function showResult() {
    	// перебирает массив для вычисления героя за которого больше всего ответили
        let key = Object.keys(result).reduce(function (a, b) { return result[a] > result[b] ? a : b });
        
        // вывод ответа с описанием
        let div = document.createElement('div');
        div.classList.add('result');
        div.innerHTML = answers[key]['description'];
        document.querySelector('main').appendChild(div);

        // вывод картинки
        let img = document.createElement('img');
        img.src = 'img/' + answers[key]['image'];
        img.classList.add('result-img')
        document.querySelector('main').appendChild(img);

        // вывод кнопки назад
        let reloadButton = document.createElement('button');
        reloadButton.innerHTML = 'New quiz';
        reloadButton.classList.add('reload-button');
        document.querySelector('main').appendChild(reloadButton);
    }

    showQuestion();
}


