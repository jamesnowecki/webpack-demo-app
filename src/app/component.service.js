export class ComponentService {
    constructor() {
        this.numberOneInput = document.getElementById("numberOne");
        this.numberTwoInput = document.getElementById("numberTwo");
        this.addValues = document.getElementById("addValues");
        this.resultDiv = document.getElementById("result");
    }

    getInputs() {
        return [this.numberOneInput.value, this.numberTwoInput.value];
    }

    setResult(str) {
        this.resultDiv.innerText = str;
    }

    onClick(cb) {
        this.addValues.addEventListener("click", cb);
    }
}