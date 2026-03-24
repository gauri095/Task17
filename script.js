 // TASK: Arrow function that returns a Promise
        const divideNumbers = (num1, num2) => {
            return new Promise((resolve, reject) => {
                if (num2 === 0) {
                    // This happens if things go wrong
                    reject("You can't divide by zero!");
                } else {
                    // This happens if things go right
                    resolve(num1 / num2);
                }
            });
        };

        // BONUS: Same thing but using async/await syntax
        const divideNumbersAsync = async (num1, num2) => {
            if (num2 === 0) {
                throw new Error("Cannot divide by zero (Async)");
            }
            return num1 / num2;
        };

        const displayArea = document.getElementById('display');

        // Testing 5 cases
        const myTests = [
            [10, 2],
            [20, 0], // Should error
            [50, 5],
            [9, 3],
            [7, 0]  // Should error
        ];

        myTests.forEach(pair => {
            divideNumbers(pair[0], pair[1])
                .then(result => {
                    console.log("Success:", result);
                    displayArea.innerHTML += `<p>${pair[0]} / ${pair[1]} = ${result}</p>`;
                })
                .catch(error => {
                    console.log("Error:", error);
                    displayArea.innerHTML += `<p style="color:red">${error}</p>`;
                });
        });
