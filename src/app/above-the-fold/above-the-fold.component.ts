import { Component } from '@angular/core';

@Component({
    selector: 'app-above-the-fold',
    standalone: true,
    templateUrl: './above-the-fold.component.html',
    styleUrl: './above-the-fold.component.scss',
    imports: []
})
export class AboveTheFoldComponent {
    txtFull = "FRONTEND DEVELOPER"; 
    txtArr = this.txtFull.split("");
    charsToLeave = Math.floor(Math.random() * 2) + 1;

    constructor() {
        if (typeof document !== 'undefined') {
            this.writeOut(this.txtArr);
        }
    }

    getRandomTime() {
        return Math.random() * 0.5;
    }

    getEle(id: string) {
        return typeof document !== 'undefined' ? document.getElementById(id) : null;
    }

    ModifyTxt(el: HTMLElement, txt: string) {
        el.innerHTML = txt;
    }

    writeOut(txtArr: string[], curChar = 0) {
        const randomTime = this.getRandomTime();
        setTimeout(() => {
            const el = this.getEle("text");
            if (el) { 
                let elTxt = el.innerHTML;
                elTxt += txtArr[curChar];
                this.ModifyTxt(el, elTxt);

                if (curChar + 1 === txtArr.length) {
                    return this.deleteOut(txtArr, txtArr.length);
                }
                return this.writeOut(txtArr, curChar + 1);
            }
        }, randomTime * 1000);
    }

    deleteOut(txtArr: string[], curChar: number) {
        const randomTime = this.getRandomTime();
        setTimeout(() => {
            const el = this.getEle("text");
            if (el) { 
                let elTxt = el.innerHTML;

                const elTxtArr = elTxt.split("");
                const newElTxt = elTxtArr.slice(0, curChar - 1).join("");
                this.ModifyTxt(el, newElTxt);

                if (curChar - 1 <= this.charsToLeave) {
                    return this.writeOut(txtArr, this.charsToLeave);
                }
                return this.deleteOut(txtArr, curChar - 1);
            }
        }, randomTime * 1000);
    }
}



