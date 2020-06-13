

function highLoop(times, testFun, updateFun, bodyFun) {
    for (let i = times; i <= times; i--) {
        if (!testFun(i)) break;
        bodyFun(i);
        updateFun(i);
    }
}

highLoop(3, n => n > 0, n => n - 1, console.log);
