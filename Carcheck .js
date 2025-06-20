function startDiagnosis(issue) {
    const questionArea = document.getElementById('question-area');
    const resultArea = document.getElementById('result-area');
    questionArea.innerHTML = '';
    resultArea.innerHTML = '';

    const questions = [
        {
            text: 'Tritt das Ruckeln nur im Leerlauf auf?',
            yes: 'Ist eine Checkengine-Leuchte sichtbar?',
            no: 'Tritt es nur beim Gasgeben auf?'
        },
        {
            text: 'Ist eine Checkengine-Leuchte sichtbar?',
            yes: 'Fehler P0300: Zündung prüfen. Mögliche Ursache: Zündspule/Zündkerze defekt.',
            no: 'Nebenluft möglich. Bremsenreiniger-Test an Ansaugtrakt.'
        },
        {
            text: 'Tritt es nur beim Gasgeben auf?',
            yes: 'Evtl. Luftmassenmesser verdreckt. Reinigen oder tauschen.',
            no: 'Kompression prüfen. Möglich: mechanischer Motorschaden.'
        }
    ];

    let step = 0;

    function showQuestion(q) {
        questionArea.innerHTML = '<p>' + q.text + '</p>' +
            '<button onclick="answer('yes')">Ja</button>' +
            '<button onclick="answer('no')">Nein</button>';
    }

    window.answer = function(choice) {
        if (step === 0) {
            step = (choice === 'yes') ? 1 : 2;
            showQuestion(questions[step]);
        } else {
            resultArea.innerHTML = '<p><strong>Lösungsvorschlag:</strong> ' + 
                ((choice === 'yes') ? questions[step].yes : questions[step].no) + '</p>';
            questionArea.innerHTML = '';
        }
    }

    showQuestion(questions[0]);
}
