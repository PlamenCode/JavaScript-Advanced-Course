function mathOp(num1, num2, sign){
    let result;

    switch(sign){
        case '+': result = num1 + num2;
            break;
        case '-': result = num1 - num2;
            break;
        case '*': result = num1 * num2;
            break;
        case '/': result = num1 / num2;
            break;
        case '%': result = num1 % num2;
            break;
        case '**': result = num1 ** num2;
            break;
    }
    console.log(result);
}
mathOp(5,5, '+')