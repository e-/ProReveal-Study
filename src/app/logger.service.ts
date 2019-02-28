import { Injectable } from '@angular/core';
import { C } from './constants';
import { shuffle } from './util';

type UId = string; // user id
type PId = number; // session id
const LOCAL_STORAGE_KEY = 'sg';

export interface ProblemLogSpec {
    uid: UId;
    pid: PId;
    startAt: number;
    endAt: number;
    duration: number;
    userAnswer: number;
    correctAnswer: number;
    isCorrect: boolean;
}

export class ProblemLog {
    constructor(public uid: UId, public pid: PId,
        public startAt: number, public endAt: number, public duration: number,
        public userAnswer: number, public correctAnswer: number, public isCorrect: boolean) {

    }

    static fromObject(o: ProblemLogSpec) {
        return new ProblemLog(o.uid, o.pid, o.startAt, o.endAt, o.duration,
            o.userAnswer, o.correctAnswer, o.isCorrect);
    }

    toObject(): ProblemLogSpec {
        return {
            uid: this.uid,
            pid: this.pid,
            startAt: this.startAt,
            endAt: this.endAt,
            duration: this.duration,
            userAnswer: this.userAnswer,
            correctAnswer: this.correctAnswer,
            isCorrect: this.isCorrect
        }
    }
}

export interface UserLogSpec {
    uid: UId;
    problemLogs: ProblemLogSpec[];
}

export class UserLog {
    problemLogs: ProblemLog[] = [];

    constructor(public uid: UId) {
        for(let i = 0; i < 5; i++) {
            this.problemLogs.push(new ProblemLog(
                uid, i + 1, 0, 0, 0, 0, C.problemSpecs[i].correctAnswer, false
            ));
        }

        let remaining = [];
        for(let i = 5 ; i < C.numProblems; i++) {
            remaining.push(new ProblemLog(
                uid, i + 1, 0, 0, 0, 0, C.problemSpecs[i].correctAnswer, false
            ));
        }

        shuffle(remaining);

        this.problemLogs = this.problemLogs.concat(remaining);
    }

    static fromObject(o: UserLogSpec) {
        let ulog = new UserLog(o.uid);

        o.problemLogs.forEach(slogObject => {
            ulog.problemLogs.push(ProblemLog.fromObject(slogObject));
        })

        return ulog;
    }

    toObject(): UserLogSpec {
        return {
            uid: this.uid,
            problemLogs: this.problemLogs.map(slog => slog.toObject())
        }
    }
}

@Injectable({
    providedIn: 'root'
})
export class LoggerService {
    userLogs: UserLog[] = [];
    uid: UId;

    userLog: UserLog; // user log of the current user

    constructor() {
        let previousLog = window.localStorage.getItem(LOCAL_STORAGE_KEY);

        if (previousLog && previousLog.length >= 1) {
            const ulogs = JSON.parse(previousLog);

            ulogs.forEach(ulogObject => {
                this.userLogs.push(UserLog.fromObject(ulogObject))
            })
        }
    }

    setup(uid: UId) {
        this.uid = uid;

        if (!this.userLogs.find(ulog => ulog.uid === uid))
            this.userLogs.push(new UserLog(uid));

        this.userLog = this.userLogs.filter(ulog => ulog.uid === uid)[0];
    }

    // log(type: LogType, data: Object) {
    //     if (this.muted) return;

    //     let now = Date.now();
    //     let item = new LogItem(type, data, now);

    //     this.sessionLog.logs.push(item);

    //     this.save();
    // }

    save() {
        let o: UserLogSpec[] = [];

        this.userLogs.forEach(ulog => {
            o.push(ulog.toObject());
        })

        window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(o));
    }

    clear() {
        window.localStorage.removeItem(LOCAL_STORAGE_KEY);
        this.userLogs = [];
    }

    get size() {
        return window.localStorage[LOCAL_STORAGE_KEY] ? window.localStorage[LOCAL_STORAGE_KEY].length : 0;
    }
}
