import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';
import { NgForm } from '@angular/forms';
import { C } from './constants';

const WindowName = 'expwindow';
const Task2Data = 'movies';
const Task2SId = 'task2';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    C = C;
    PS = C.problemSpecs;

    @ViewChild('p1') p1: TemplateRef<any>;
    @ViewChild('p2') p2: TemplateRef<any>;
    @ViewChild('p3') p3: TemplateRef<any>;
    @ViewChild('p4') p4: TemplateRef<any>;
    @ViewChild('p5') p5: TemplateRef<any>;
    @ViewChild('p6') p6: TemplateRef<any>;
    @ViewChild('p7') p7: TemplateRef<any>;
    @ViewChild('p8') p8: TemplateRef<any>;
    @ViewChild('p9') p9: TemplateRef<any>;
    @ViewChild('p10') p10: TemplateRef<any>;

    problemTemplates: { [pid: string]: TemplateRef<any> };

    uid: string = '2'; //null;

    tid: number = 2;
    pid: number = 0; //2;
    startAt: number;
    endAt: number;

    t1q = false;
    t2q = false;
    t3q = false;
    t4q = false;
    t5q = false;


    constructor(public logger: LoggerService) {

    }

    ngOnInit() {
        this.problemTemplates = {
            1: this.p1, 2: this.p2, 3: this.p3, 4: this.p4, 5: this.p5,
            6: this.p6, 7: this.p7, 8: this.p8, 9: this.p9, 10: this.p10
        };

        this.setup();
    }

    url(data:string, uid:string, sid:string) {
        return `https://e-.github.io/ProReveal/?study=1&data=${data}&uid=${uid}&sid=${sid}`;
    }

    setup() {
        this.logger.setup(this.uid);
        console.log(this.logger.userLog)
    }

    onSubmit(f: NgForm) {
        let uid = f.value.uid;
        if (uid) {
            this.uid = uid;
            this.setup();
        }

        return false;
    }

    createNewWindow() {
        window.open(this.url('weather', this.uid, '0'), WindowName, 'resize');
    }

    train(tid: number) {
        this.tid = tid;
    }

    trainingBack() {
        this.tid = 0;
    }

    startProblem(pid: number) {
        this.pid = pid;
        this.startAt = +new Date();

        window.open(this.url(this.PS[pid].data, this.uid, pid.toString()), WindowName, 'resize');
    }

    select(answer: number) {
        window.open('https://e-.github.io/blank/', WindowName, 'resize');

        const endAt = +new Date();
        let problemLog = this.logger.userLog.getProblemLog(this.pid);

        problemLog.userAnswer = answer;
        problemLog.isCorrect = answer === problemLog.correctAnswer;
        problemLog.startAt = this.startAt;
        problemLog.endAt = endAt;
        problemLog.duration = endAt - this.startAt;

        // save
        this.logger.save();

        this.pid = null;
    }

    startTask2() {
        window.open(this.url(Task2Data, this.uid, Task2SId), WindowName, 'resize');
    }

    downloadCurrentUserLog() {
        let userLog = this.logger.userLog;
        let userLogString = JSON.stringify(userLog.toObject(), null, 2);
        let dataString = `data:text/json;charset=utf-8,${encodeURIComponent(userLogString)}`;
        let anchor = document.createElement("a");
        anchor.setAttribute("href", dataString);
        anchor.setAttribute("download", `answers-${this.logger.uid}.json`);
        document.body.appendChild(anchor); // required for firefox
        anchor.click();
        anchor.remove();
    }

    wrong() {
        alert('다시 생각해 보세요!')
    }
}
