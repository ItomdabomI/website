document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');

    // Define the correct answers
    const correctAnswers = {
        q1: 'b',
        q2: 'c',
        q3: 'd',
        q4: 'b',
        q5: 'b',
        q6: 'b',
        q7: 'c',
        q8: 'd',
        q9: 'b',
        q10: 'c'
    };

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from reloading the page

        let score = 0;
        const totalQuestions = Object.keys(correctAnswers).length;

        // Iterate through each question and mark answers
        for (const [key, correctAnswer] of Object.entries(correctAnswers)) {
            const selected = form.elements[key]?.value; // Get the selected answer
            const questionDiv = form.querySelector(`[name="${key}"]`).closest('.question'); // Get the question container

            if (selected === correctAnswer) {
                score++;
                questionDiv.style.backgroundColor = 'lightgreen'; // Highlight correct answers
            } else {
                questionDiv.style.backgroundColor = 'lightcoral'; // Highlight incorrect answers
            }
        }

        // Display the result
        resultDiv.innerHTML = `You scored ${score} out of ${totalQuestions}.`;
        resultDiv.style.color = score === totalQuestions ? 'green' : score >= totalQuestions / 2 ? 'orange' : 'red';
        resultDiv.style.display = 'block';
    });

    // Handle form reset
    form.addEventListener('reset', () => {
        const questionDivs = document.querySelectorAll('.question');
        questionDivs.forEach(div => div.style.backgroundColor = ''); // Clear any background colors
        resultDiv.style.display = 'none'; // Hide the result
    });
});
