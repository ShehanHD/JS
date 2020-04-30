class ControlForm{
    path;

    constructor(path) {
        this.path = path;
    }

    verifyValue = (e, RegEx=/[\s\S]+/) => {
        return RegEx.test(e.target.value);
    }

    comparePass = (pass1, e) => {
        return pass1 === e.target.value ? true : false;
    }

    send = () => {
        $.ajax({
            type: "method",
            url: "url",
            data: "data",
            dataType: "dataType",
            success: function (response) {
                
            }
        });
    }
}
