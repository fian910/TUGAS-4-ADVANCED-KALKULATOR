import BasicCalculator from "./BasicCalculator.js";

export default class ScientificCalculator extends BasicCalculator {
    calculate() {
        const expression = this.display.value;
        const lastChar = expression.slice(-1);

        if (/[+\-*/.]/.test(lastChar)) {
            alert("Invalid expression! Ensure expression is complete");
            return;
        }

        try{
            const result = eval(expression);
            this.display.value = Number.isInteger(result)
              ? result.toString()
              : parseFloat(result.toFixed(5)).toString();
        } catch (error) {
            alert("Invalid Expression!");
        }
    }

    calculateSquareRoot() {
        const currentValue = parseFloat(this.display.value);
        if (currentValue > 0) {
            this.display.value = Math.sqrt(currentValue).toString();
        } else {
            alert("Cannot calculate square root of a negative number");
        }
    }

    calculateSquare() {
        const currentValue = parseFloat(this.display.value);
        this.display.value = (currentValue ** 2).toString();
    }

    appendPi() {
        this.appendWithMultiplier(Math.PI.toFixed(2));
    }

    appendE() {
        this.appendWithMultiplier(Math.E.toFixed(5));
    }

    appendOpenParenthesis() {
        if (this.display.value === "0" || /[+\-*/(]$/.test(this.display.value)) {
            this.append("(");
        }
    }

    appendCloseParenthesis() {
        const openParens = (this.display.value.match(/\(/g) || []).length;
        const closedParens = (this.display.value.match(/\)/g) || []).length;
        if (openParens > closedParens && !/[+\-*/(]$/.test(this.display.value)) {
            this.append(")");
        }
    }

    appendWithMultiplier(value) {
        if (this.display.value != "0") {
            this.append("*" + value);
        } else {
            this.append(value);
        }
    }
        
}