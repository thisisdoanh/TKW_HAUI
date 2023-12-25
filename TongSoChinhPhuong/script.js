function myFunction() {
    const num = document.getElementById('number').value;
    let sum = 0;
    

    if (num == '') {
        alert('Không được để trống!')
        return 0;
    }

    if (num < 1) {
        sum = 0;
    } else {
        for (let i = 1; i <= num; i++) {
            if ( parseInt(Math.sqrt(i))  * parseInt(Math.sqrt(i) ) === parseInt(i)) {
                sum += i;
                
                console.log( "i = ", i);
                console.log(sum);
            }
        }
    }

    console.log(sum);

    document.getElementById('result').value = sum;
}
