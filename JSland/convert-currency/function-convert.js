function Convert() {
    let amount = parseInt(document.getElementById('num').value);
    let input = document.getElementById('from').value;
    let output = document.getElementById('to').value;
    let result;
    if (input == "VND") {
        if (output == "USD") {
            result = amount / 23000;
        } else {
            result = amount / 30000;
        }
    } else if (input == "USD") {
        if (output == "VND") {
            result = amount * 23000;
        } else {
            result = amount * 30000;
        }
        /* }else
            if (input === "PGB"){
                if (output === "VND"){
                    result = amount * 30000;
                } else {
                    result = amount * 5;
                } */
    }
    document.getElementById('kq').innerHTML = "Result : " + result;
}
