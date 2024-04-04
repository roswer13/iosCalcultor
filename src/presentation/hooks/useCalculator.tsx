import { useRef, useState } from "react";

enum Operator {
    add = '+',
    substract = '-',
    multiply = '*',
    divide = '/'
}

export const useCalculator = () => {
    const [number, setNumber] = useState('0');
    const [previousNumber, setPreviousNumber] = useState('0');

    const lastOperation = useRef<Operator>();

    const clean = () => {
        setNumber('0');
        setPreviousNumber('0');
    }

    const deleteOperation = () => {
        if (number.length === 1) {
            return setNumber('0');
        }
        return setNumber(number.slice(0, -1));
    }

    const togleSing = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''));
        }
        return setNumber('-' + number);
    }

    const builNumber = (numberString: string) => {
        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.') {
                return setNumber(number + numberString);
            }
            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }
            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString);
            }
            if (numberString === '0' && !number.includes('.')) {
                return;
            }
            return setNumber(number + numberString);
        }

        setNumber(number + numberString);
    }

    const setLastNumber = () => {
        if (number.endsWith('.')) {
            setPreviousNumber(number.slice(0, -1));
        } else {
            setPreviousNumber(number);
        }

        setNumber('0');
    }

    const devideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    }

    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    }

    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    }

    const substractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.substract;
    }

    const calculateResult = () => {
        const num1 = Number(number);
        const num2 = Number(previousNumber);

        switch (lastOperation.current) {
            case Operator.add:
                setNumber(`${num1 + num2}`);
                break;
            case Operator.substract:
                setNumber(`${num2 - num1}`);
                break;
            case Operator.multiply:
                setNumber(`${num1 * num2}`);
                break;
            case Operator.divide:
                setNumber(`${num2 / num1}`);
                break;
            default:
                throw new Error('Operation not found');
        }

        setPreviousNumber('0');
    }

    return {
        // Properties
        number,
        previousNumber,
        // Methods
        builNumber,
        clean,
        deleteOperation,
        togleSing,
        devideOperation,
        multiplyOperation,
        addOperation,
        substractOperation,
        calculateResult
    }
}