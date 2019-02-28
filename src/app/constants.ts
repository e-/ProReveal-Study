export interface ProblemSpec {
    pid: number;
    name: string;
    data: string;
    correctAnswer: number;
    answers: string[];
}

export const C = Object.freeze({
    numProblems: 10,
    problemSpecs: {
        1: {
            pid: 1,
            name: '연습 1',
            data: 'weather',
            correctAnswer: 1,
            answers: ['보기1', '보기2', '보기3', '보기4', '보기5']
        },
        2: {
            pid: 2,
            name: '연습 2',
            data: 'weather',
            correctAnswer: 1,
            answers: ['보기1', '보기2', '보기3', '보기4', '보기5']
        },
        3: {
            pid: 3,
            name: '연습 3',
            data: 'weather',
            correctAnswer: 1,
            answers: ['보기1', '보기2', '보기3', '보기4', '보기5']
        },
        4: {
            pid: 4,
            name: '연습 4',
            data: 'weather',
            correctAnswer: 1,
            answers: ['보기1', '보기2', '보기3', '보기4', '보기5']
        },
        5: {
            pid: 5,
            name: '연습 5',
            data: 'weather',
            correctAnswer: 1,
            answers: ['보기1', '보기2', '보기3', '보기4', '보기5']
        },
        6: {
            pid: 6,
            name: '문제 1',
            data: 'birdstrikes',
            correctAnswer: 1,
            answers: ['보기1', '보기2', '보기3', '보기4', '보기5']
        },
        7: {
            pid: 7,
            name: '문제 2',
            data: 'birdstrikes',
            correctAnswer: 1,
            answers: ['보기1', '보기2', '보기3', '보기4', '보기5']
        },
        8: {
            pid: 8,
            name: '문제 3',
            data: 'birdstrikes',
            correctAnswer: 1,
            answers: ['보기1', '보기2', '보기3', '보기4', '보기5']
        },
        9: {
            pid: 9,
            name: '문제 4',
            data: 'birdstrikes',
            correctAnswer: 1,
            answers: ['보기1', '보기2', '보기3', '보기4', '보기5']
        },
        10: {
            pid: 10,
            name: '문제 5',
            data: 'birdstrikes',
            correctAnswer: 1,
            answers: ['보기1', '보기2', '보기3', '보기4', '보기5']
        }
     } as { [pid: string] : ProblemSpec}
});

