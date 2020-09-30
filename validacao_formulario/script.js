let input = document.querySelectorAll("form .focus");
let form = document.querySelector(".validator");
let validator = {
    handleSubmit:(event) => {
        event.preventDefault();
        let send = true;
        let inputs = form.querySelectorAll("input");

        validator.clearErrors();

        for(i = 0; i< inputs.length; i++) {
            let input = inputs[i];
            let check = validator.checkInput(input);
            
            if(check !== true) {
                send = false;
                validator.showErrors(input, check);
                
            }
        }

        if(send) {
            form.submit();
        }

    }, 
    checkInput:(input) => {
        let rules = input.getAttribute('data-rules');

        if(rules !== null) {
            rules = rules.split("|");
            for(let rule in rules) {
                let ruleDetails = rules[rule].split("=");
                switch(ruleDetails[0]) {
                    case 'required':
                        if(input.value === '') {
                            return 'Campo não pode ser vazio!';
                        }
                    break;
                    case 'min': 
                        if(input.value.length < ruleDetails[1]) {
                            return 'O campo tem que ter no mínimo '+ ruleDetails[1] +' caracteres'
                        }
                    break;
                    case 'email': 
                        if(input.value !== '') {
                            let rgx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if(!rgx.test(input.value.toLowerCase())) {
                                return 'Email diitado é inválido!';
                            }
                        }
                    break;
                        
                }
            }
        }

        return true;
    },
    showErrors:(input, error) => {
        input.style.borderColor = "#FF0000";

        let errorElement = document.createElement("div");
        errorElement.classList.add("error");
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.ElementSibling);

    },
    clearErrors:() => {
        let inputs = form.querySelectorAll('input');
        for(let i = 0; i < inputs.length; i++) {
            inputs[i].stye = '';
        }
        let errorElement = document.querySelectorAll(".error");
        for(let i = 0; i < errorElement.length; i++) {
            errorElement[i].remove();
        }
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
