'use strict';
// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits.toString());
    console.log(fruits.join(''));
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    console.log(fruits.split(','));
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    console.log(array.reverse().forEach(item => console.log(item)));
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    console.log(array.slice(2));
}


class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{

    const result = students.find((item, value) => {

    });
}

// Q6. make an array of enrolled students
{
    const enrolledStudents = students.filter(item => item.enrolled).map(item => item.name);
    console.log(enrolledStudents);
}
// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    console.log(students.map(item => item.score));
}


// Q8. check if there is a student with the score lower than 50
{
    const result = students.some(item => item.score < 50);
    console.log(result);
}
console.clear();
// Q9. compute students' average score
{
    //누산기accmulator(prev)는 콜백의 반환값을 누적합니다. 
    //콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값입니다.
    const result = students.reduce((prev, curr) => prev + curr.score, 0)
    console.log(result / students.length);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    //이 함수가 리턴하는 값이 0보다 작을 경우,  a가 b보다 앞에 오도록 정렬하고,
    //이 함수가 리턴하는 값이 0보다 클 경우, b가 a보다 앞에 오도록 정렬합니다.
    //ex_ )83 56 87 12
    const scores = students.map(item => item.score)
        .sort((a, b) => a - b)
        .join(',');
    console.log(scores);

}

