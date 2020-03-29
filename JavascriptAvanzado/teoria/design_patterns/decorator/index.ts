class Field{
    errors: string[];
    input: HTMLInputElement;

    constructor (input:HTMLInputElement){
        this.input = input;
        this.errors = [];

        let errorMessage = document.createElement('p');
        errorMessage.className = 'text-danger';
        this.input.parentNode.insertBefore(errorMessage,this.input.nextSibling);

        this.input.addEventListener('input',()=>{
            this.errors = [];
            this.validate ();
            errorMessage.innerText = this.errors[0]||'';
        });
    }

    validate(){

    }
}


function RequireFieldDecorator(field:Field):Field{
    let validate = field.validate;
    field.validate = function(){
        validate()
        let value = field.input.value;
        if (!value){
            field.errors.push("Esta vacio");
        }
    }
    return field;
}

function RequireNoNumberDecorator(field:Field):Field{
    let validate = field.validate;
    field.validate = function(){
        validate()
        let value = field.input.value;
        if (value.match(/^[0-9]*$/)){
                field.errors.push("No es letrita");
        }        
    }
    return field;
}

let field = new Field(document.querySelector("#email"));
RequireFieldDecorator(field);
RequireNoNumberDecorator(field);