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
            correctAnswer: 2,
            answers: ['~2, ~10', '~4, ~10', '~6, ~10', '~8, ~10', '~10, ~10']
            // ~4, ~10
        },
        2: {
            pid: 2,
            name: '연습 2',
            data: 'weather',
            correctAnswer: 3,
            answers: ['화창, 시애틀', '화창, 뉴욕', '안개, 시애틀', '안개, 뉴욕', '비, 시애틀']
            // 시애틀-안개
        },
        3: {
            pid: 3,
            name: '연습 3',
            data: 'weather',
            correctAnswer: 4,
            answers: ['눈', '이슬비', '비', '화창', '안개']
            // 화창
        },
        4: {
            pid: 4,
            name: '연습 4',
            data: 'weather',
            correctAnswer: 1,
            answers: ['~10', '~20', '~30', '~40', '~50']
            // ~10
        },
        5: {
            pid: 5,
            name: '연습 5',
            data: 'weather',
            correctAnswer: 5,
            answers: ['눈', '이슬비', '비', '화창', '안개']
            // 안개
        },
        6: {
            pid: 6,
            name: '문제 1',
            data: 'birdstrikes',
            correctAnswer: 1,
            answers: ['~140, 1억 이하', '~160, 1억 이하', '~180, 1억 이하', '~200, 1억 이하', '~220, 1억 이하']
            // 1억 이하, ~140
        },
        7: {
            pid: 7,
            name: '문제 2',
            data: 'birdstrikes',
            correctAnswer: 2,
            answers: ['없음, 이륙 주행', '없음, 접근', '중간, 접근', '경미, 접근', '없음, 착륙 활주']
            // 접근, 없음
        },
        8: {
            pid: 8,
            name: '문제 3',
            data: 'birdstrikes',
            correctAnswer: 4,
            answers: ['라과디아 공항', '리후에 공항', '멤피스 국제공항', '존 에프 케네디 국제공항', '덴버 국제공항']
            // 존 F 케네디 국제공항
        },
        9: {
            pid: 9,
            name: '문제 4',
            data: 'birdstrikes',
            correctAnswer: 2,
            answers: ['~140', '~160', '~180', '~200', '~220']
            // 140-160
        },
        10: {
            pid: 10,
            name: '문제 5',
            data: 'birdstrikes',
            correctAnswer: 3,
            answers: ['1999년', '2000년', '2001년', '2002년', '2003년']
            // 1901년
        }
     } as { [pid: string] : ProblemSpec}
});

