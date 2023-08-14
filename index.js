const verbList = [
    { present: "go", past: "went" },
    { present: "eat", past: "ate" },
    { present: "sleep", past: "slept" },
    { present: "can", past: "could" },
    { present: "break", past: "broke" },
    { present: "drink", past: "drank" },
    { present: "fall", past: "fell" },
    { present: "win", past: "won" },
    { present: "get", past: "got" },
    { present: "drive", past: "drove" },
    { present: "fly", past: "flew" },
    { present: "have", past: "had" },
    { present: "take", past: "took" },
    { present: "write", past: "wrote" },
    { present: "speak", past: "spoke" },
    { present: "make", past: "made" },    
];

let userName = prompt("Enter your name:");
alert("Welcome " + userName + "," + " " + "Let's start the quiz");

function randomVerb() {
    const randomMath = Math.floor(Math.random() * verbList.length);
    return verbList[randomMath];
}

function questions() {
    const verb = randomVerb();
    const options = [
        verb.past,
        randomVerb().past,
        randomVerb().past
    ];

    const selectedOption = prompt(`Choose the verb "${verb.present}" in the past tense:\n\n1. ${options[0]}\n2. ${options[1]}\n3. ${options[2]}`);

    if (selectedOption === '1' && options[0] === verb.past) {
        alert("Well done!");
        return true;
    } else if (selectedOption === '2' && options[1] === verb.past) {
        alert("Well done!");
        return true;
    } else if (selectedOption === '3' && options[2] === verb.past) {
        alert("Well done!");
        return true;
    } else if (selectedOption === null) {
        alert("Test canceled.");
        return false;
    } else {
        alert(`Wrong. The correct answer is "${verb.past}". Keep practicing!`);
        return false;
    }
}

while (true) {
    const continueTest = questions();
    if (!continueTest) {
        break;
    }
}




