function typeChecker(a, b) {
    if (typeof a == typeof b) {
        if (typeof a == 'string') {
            return 'I LOVE YOU';
        }
        else {
            return a + b;
        }
    }
    else {
        return 'NOT MATCHED';
    }
}