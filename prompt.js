module.exports = (message, value) => {
    return new Promise((res, rej) => {
        let input = document.createElement('input');
        input.type = "text";
        let val = "";
        input.onkeypress = e => {
            if(e.key.toLowerCase() == "enter") {
                val = input.value;
                document.body.removeChild(input);
                res(val);
            }
        }
        input.value = value || "";
        input.title = message;
        input.style.position = "fixed";
        input.style.top = "50%";
        input.style.left = "50%";
        input.style.zIndex = 42; // for good luck
        document.body.appendChild(input);
        input.focus();
    });
    
}