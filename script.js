var students = [
    {
        name: 'John',
        score1: 47,
        score2: 46
    },
    {
        name: 'Bob',
        score1: 23,
        score2: 24
    },
    {
        name: 'Nick',
        score1: 40,
        score2: 34
    },
    {
        name: 'Alex',
        score1: 44,
        score2: 45
    }
];
var scores = [91, 81, 71, 61, 51];
var degrees = ['A', 'B', 'C', 'D', 'E'];

function calculate(score1, score2) {
    var totalScore = score1 + score2;
    return totalScore
}

function whichDegree(student, points, degree) {
    for(var i = 0; i < students.length; i++) {
        students[i].sum = calculate(students[i].score1, students[i].score2);
        if(students[i]. sum >= 51) {
            console.log(students[i].name + " passed final exam successfully");

            for(var x = 0; x <scores.length; x++) {
                if(students[i].sum >= scores[x]) {
                    console.log(students[i].name + " has " + students[i].sum + " and he got diploma with degree "
                        + degrees[x]);
                    break
                }

                }
            }
        else {
            console.log(students[i].name + " has " + students[i].sum + " and he has failed the exam" );
        }


    }

}

whichDegree();

