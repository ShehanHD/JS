class FormControl {
    textField = (value, RegEx = /[\s\S]+/) => {
        return RegEx.test(value);
    }
    numberField = (value, RegEx = /[0-9]+/) => {
        return RegEx.test(value);
    }
    passwordField = (value, RegEx = /[\s\S]+/) => {
        return RegEx.test(value);
    }
    sendPOST = (url = "index.php", data) => {
        $.ajax({
            method: "POST",
            url: url,
            data
        }).done(function (data) {
            console.log(data);
        }).fail(function (data) {
            console.log(data);
        });
    }
}

let x = new FormControl();

x.sendPOST({test: "test"});