window.addEventListener("load", function() {

    const validation = new JustValidate(".main__contact");
    let isValidated = false;

    validation
        .addField("#name", [
            {
                rule: "required",
                errorMessage: "El nombre es obligatorio"
            },
            {
                rule: "minLength",
                value: 3,
                errorMessage: "El nombre debe tener al menos 3 caracteres"
            },
            {
                rule: "maxLength",
                value: 30,
                errorMessage: "El nombre no puede tener más de 30 caracteres"
            }
        ])

        .addField("#surname", [
            {
                rule: "required",
                errorMessage: "Los apellidos son obligatorios"
            },
            {
                rule: "minLength",
                value: 3,
                errorMessage: "Los apellidos deben tener al menos 3 caracteres"
            },
            {
                rule: "maxLength",
                value: 25,
                errorMessage: "Los apellidos no puede tener más de 25 caracteres"
            }
        ])

        .addField("#email", [
            {
                rule: "required",
                errorMessage: "El email es obligatorio"
            },
            {
                rule: "email",
                errorMessage: "El email no es válido"
            }
        ])

        .addField("#gender", [
            {
                rule: "required",
                errorMessage: "Selecciona un género"
            }
        ])

        .addField("#date", [
            {
                rule: "required",
                errorMessage: "Fecha obligatoria"
            }
        ])

        .addField("#gender", [
            {
                rule: "required",
                errorMessage: "Selecciona un género"
            }
        ])

        .addField("#age", [
            {
                rule: "required",
                errorMessage: "Edad obligatoria"
            },
            {
                rule: "integer",
                errorMessage: "La edad debe ser un número entero"
            }
        ])

        .onSuccess((event) => {
            isValidated = true;
            event.target.submit();
            this.alert("Formulario enviado correctamente");
        });
});