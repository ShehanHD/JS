class ControlForm{
    verifyValue = (e, RegEx=/[\s\S]+/) => {
        return RegEx.test(e.target.value);
    }

    comparePass = (pass1, e) => {
        return pass1 === e.target.value ? true : false;
    }

}
