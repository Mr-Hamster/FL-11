const pipe = (x, ...arg) => {
    for(let i = 0; i < arg.length; i++){
        x = arg[i](x);
    }
    return x;
}

const addOne = (x) => {
    return x + 1;
}

pipe(1, addOne, addOne);