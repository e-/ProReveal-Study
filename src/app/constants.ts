export interface ProblemSpec {
    pid: number;
    name: string;
    data: string;
    correctAnswer: number;
}

export const C = Object.freeze({
    numProblems: 10,
    problemSpecs: [
        {
            pid: 1,
            name: '연습 1',
            data: 'weather',
            correctAnswer: 1
        },
        {
            pid: 2,
            name: '연습 2',
            data: 'weather',
            correctAnswer: 1
        },
        {
            pid: 3,
            name: '연습 3',
            data: 'weather',
            correctAnswer: 1
        },
        {
            pid: 4,
            name: '연습 4',
            data: 'weather',
            correctAnswer: 1
        },
        {
            pid: 5,
            name: '연습 5',
            data: 'weather',
            correctAnswer: 1
        },
        {
            pid: 6,
            name: '문제 1',
            data: 'birdstrikes',
            correctAnswer: 1
        },
        {
            pid: 7,
            name: '문제 2',
            data: 'birdstrikes',
            correctAnswer: 1
        },
        {
            pid: 8,
            name: '문제 3',
            data: 'birdstrikes',
            correctAnswer: 1
        },
        {
            pid: 9,
            name: '문제 4',
            data: 'birdstrikes',
            correctAnswer: 1
        },
        {
            pid: 10,
            name: '문제 5',
            data: 'birdstrikes',
            correctAnswer: 1
        }
    ] as ProblemSpec[]
});

