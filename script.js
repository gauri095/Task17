 // The core arrow function returning a Promise
        const divideNumbers = (a, b) => {
            return new Promise((resolve, reject) => {
                if (b === 0) {
                    reject("Error: Division by zero is not allowed.");
                } else {
                    resolve(a / b);
                }
            });
        };

        const display = document.getElementById('results-container');
        const btn = document.getElementById('run-tests');

        const runTests = () => {
            display.innerHTML = ''; // Clear previous results
            const testCases = [
                { a: 10, b: 2 },
                { a: 5, b: 0 },
                { a: 100, b: 4 },
                { a: -12, b: 3 },
                { a: 7, b: 2 }
            ];

            testCases.forEach(({ a, b }, index) => {
                const resultLine = document.createElement('div');
                resultLine.className = 'result-line';
                
                divideNumbers(a, b)
                    .then((res) => {
                        resultLine.innerHTML = `<strong>Test ${index + 1}:</strong> ${a} / ${b} = <span class="success">${res}</span>`;
                    })
                    .catch((err) => {
                        resultLine.innerHTML = `<strong>Test ${index + 1}:</strong> ${a} / ${b} = <span class="error">${err}</span>`;
                    })
                    .finally(() => {
                        display.appendChild(resultLine);
                    });
            });
        };

        btn.addEventListener('click', runTests);
        window.onload = runTests; // Run once on load