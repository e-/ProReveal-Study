import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';
import { NgForm } from '@angular/forms';
import { C } from './constants';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    C = C;

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

    problemTemplates: TemplateRef<any>[];

    pid = 1;
    uid: string = '1';

    constructor(public logger: LoggerService) {

    }

    ngOnInit() {
        this.problemTemplates = [
            this.p1, this.p2, this.p3, this.p4, this.p5,
            this.p6, this.p7, this.p8, this.p9, this.p10
        ];

        this.setup();
    }

    setup() {
        this.logger.setup(this.uid);
        console.log(this.logger.userLog)
    }

    onSubmit(f: NgForm) {
        let uid = f.value.uid;
        if(uid) {
            this.uid = uid;
            this.setup();
        }

        return false;
    }

    startProblem(pindex: number) {
        let pid = pindex + 1;


    }
}
