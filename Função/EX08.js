function fatorial(v1 = 0) {
    if (v1 == 1) {
        return 1
    } else{
        return v1 * fatorial(v1 - 1)
    }
        
}
console.log(fatorial(5))