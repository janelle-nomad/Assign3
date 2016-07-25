module objects {
    
    export class Label extends createjs.Text { //label

        //oop ~ constructor
        constructor(labelString: string, labelFont: string, labelColour: string, x: number, y: number, isCentered: boolean) {
            super(labelString, labelFont, labelColour);

            if (isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }

            this.x = x;
            this.y = y;
        }
    }
} 