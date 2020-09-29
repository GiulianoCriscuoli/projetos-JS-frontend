let input = document.querySelectorAll("form .focus");
let form = document.querySelector(".validator");
let validator = {
    handleSubmit:(event) => {
        event.preventDefault();
        let send = true;
        let inputs = form.querySelectorAll("input");

        for(i = 0; i< inputs.length; i++) {
            let input = inputs[i];
            let check = validator.checkInput(input);
            
            if(check !== true) {
                send = false;
                console.log(check);
                
            }
        }

        if(send) {
            form.submit();
        }

    }, 
    checkInput:(input) => {
        let rules = input.getAttribute('data-rules');

        if(rules !== 'null') {
            rules = rules.split("|");
            for(rule in rules) {
                let ruleDetails = rules[rule].split("=");
                switch(ruleDetails[0]) {
                    case 'required':
                        if(input.value == '') {
                            return 'Campo não pode ser vazio';
                        }
                    break;
                    case 'min': 

                    break;
                        
                }
            }
        }

        return true;
    }
}

form.addEventListener("submit", validator.handleSubmit);

input.forEach(item => {
    item.addEventListener("focus", () => {
        item.style.borderColor = "#65e694";
    });
});

input.forEach(item => {
    item.addEventListener("blur", () => {
        item.style.borderColor = "#CCC";
    });
});
