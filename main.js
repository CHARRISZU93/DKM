let questions = {
    cuestionario: [
        {
            pregunta: "Es para...",
            opciones: [
                {
                    texto: "Tu Negocio",
                    valor: 1
                },
                {
                    texto: "Donde Trabajas",
                    valor: 2
                }
            ]
        },
        {
            pregunta: "Estas en...",
            opciones: [
                {
                    texto: "Chile",
                    valor: 1
                },
                {
                    texto: "Colombia",
                    valor: 2
                }
            ]
        },
        {
            pregunta: "N° Empleados: Tienes...",
            opciones: [
                {
                    texto: "Menos de 10",
                    valor: 1
                },
                {
                    texto: "Entre 11 y 50",
                    valor: 2
                },
                {
                    texto: "Entre 51 y 150",
                    valor: 3
                },
                {
                    texto: "Mas de 151",
                    valor: 4
                }
            ]
        },
        {
            pregunta: "La empresa es de...",
            opciones: [
                {
                    texto: "Productos",
                    valor: 1
                },
                {
                    texto: "Servicios",
                    valor: 2
                }
            ]
        },
        {
            pregunta: "La empresa ofrece y vende productos/servicios...",
            opciones: [
                {
                    texto: "Presencial",
                    valor: 1
                },
                {
                    texto: "Online",
                    valor: 2
                },
                {
                    texto: "Otro",
                    valor: 3
                }
            ]
        },
        {
            pregunta: "¿Tu marca tiene redes sociales?...",
            opciones: [
                {
                    texto: "Si",
                    valor: 1
                },
                {
                    texto: "No",
                    valor: 2
                }
            ]
        },
        {
            pregunta: "Respondes comentarios de tus publicaciones",
            opciones: [
                {
                    texto: "Si",
                    valor: 1
                },
                {
                    texto: "No",
                    valor: 2
                }
            ]
        },
        {
            pregunta: "Conoces la efectividad de tus interacciones en redes",
            opciones: [
                {
                    texto: "Si",
                    valor: 1
                },
                {
                    texto: "No",
                    valor: 2
                }
            ]
        },
        {
            pregunta: "¿Tu marca tiene pagina web propia?...",

            opciones: [
                {
                    texto: "Si",
                    valor: 1
                },
                {
                    texto: "No",
                    valor: 2
                }
            ]
        },
        {
            pregunta: "La empresa busca con DKM...",
            opciones: [
                {
                    texto: "Aumentar ventas",
                    valor: 1
                },
                {
                    texto: "Mejorar exposicion de marca",
                    valor: 2
                },
                {
                    texto: "Otro",
                    valor: 2
                }
            ]
        },
    ],
    respuestas: []
}

let contacto = [
    {
        pregunta: "Nombre de contacto",
    },
    {
        pregunta: "Correo electronico",
    },
    {
        pregunta: "Telefono de contacto",
    },
]

let indice = 0

actualizarPregunta()

/*
 * Es la función que se llama cada vez que se da click al botón siguiente
*/

function siguiente() {
    console.log(questions.cuestionario[indice])
    if(indice > 0) {
        console.log( "indice", questions.respuestas)
        let resultado = document.querySelector('input[name="' + (indice-1) + '"]:checked')
        if (resultado) {
            questions.respuestas[indice-1] = parseInt(resultado.value)
            console.log(resultado.value)
        }
        console.log(indice, questions.respuestas[5] === 2 )
        if(indice === 6 && questions.respuestas[5] === 2 ){
            indice += 2
        }
    }
    if (indice < questions.cuestionario.length) {
        actualizarPregunta()
    } else if (indice === questions.cuestionario.length) {
        infocontacto()
    } else {
        plan() //esta parte no se como arreglarla
    }
    indice += 1
}

//traer y mostrar el texto y opciones de la pregunta actual con el indice 
function actualizarPregunta() {
    //1. traer el div donde estan las preguntas
    let llena = document.getElementById("pregunta")
    //1,5 desocupar lleno vacio
    llena.innerHTML = ""
    //2. pregunta actual 
    console.log( questions.cuestionario[indice], indice, "198 actual")
    let actual = questions.cuestionario[indice]
    //3.pintar pregunta y opciones
    let textopregunta = document.createTextNode(actual.pregunta)
    llena.appendChild(textopregunta)
    for (let opcion of actual.opciones) {
        let x = document.createElement("INPUT");
        x.setAttribute("type", "radio");
        x.setAttribute("value", opcion.valor);
        x.setAttribute("id", opcion.texto + opcion.value)
        x.setAttribute("name", indice)
        let label = document.createElement("label")
        label.setAttribute("for", opcion.texto + opcion.value)
        let textoopc = document.createTextNode(opcion.texto)
        label.appendChild(textoopc)
        llena.appendChild(x)
        llena.appendChild(label)
    }
}

function infocontacto() {
    //1. traer el div donde estan las preguntas
    let llena = document.getElementById("pregunta")
    //1,5 desocupar lleno vacio
    llena.innerHTML = ""

    let name = document.createElement("INPUT");
    name.setAttribute("type", "text");
    name.setAttribute("id", "nombres");
    let labelname = document.createElement("label")
    labelname.setAttribute("for", "nombres")
    let labelopcname = document.createTextNode(contacto[0].pregunta)
    labelname.appendChild(labelopcname)
    llena.appendChild(labelname)
    llena.appendChild(name)

    let email = document.createElement("INPUT");
    email.setAttribute("type", "email");
    email.setAttribute("id", "mail");
    let labelemail = document.createElement("label")
    labelemail.setAttribute("for", "mail")
    let labelopcemail = document.createTextNode(contacto[1].pregunta)
    labelemail.appendChild(labelopcemail)
    llena.appendChild(labelemail)
    llena.appendChild(email)

    let telefono = document.createElement("INPUT");
    telefono.setAttribute("type", "number");
    telefono.setAttribute("id", "numero");
    let labeltelefono = document.createElement("label")
    labeltelefono.setAttribute("for", "numero")
    let labelopctelefono = document.createTextNode(contacto[2].pregunta)
    labeltelefono.appendChild(labelopctelefono)
    llena.appendChild(labeltelefono)
    llena.appendChild(telefono)
}

let email = document.getElementById(email)
let tel = document.getElementById(telefono)

function plan() {
    let tipo = questions.respuestas[1]
    let tamano = questions.respuestas[2]
    let te = questions.respuestas[3]
    let pl = questions.respuestas[4]
    let rs = questions.respuestas[5] 
    let rc = questions.respuestas[6] | 0
    let ep = questions.respuestas[7] | 0
    let wb = questions.respuestas[8]
    let pg = questions.respuestas[9]
    numplan(tipo + tamano, te, pl, rs + rc + ep, wb, pg)
}

console.group("Datos generales")
let nombre = document.getElementById("nombre")
console.log(nombre)
let correo = document.getElementById("email")
console.log(correo)
let telefono = document.getElementById("telefono")
console.log("+57" + telefono)
console.groupEnd

function numplan(gempresa, gte, gpl, gredes, gweb, ggoal) {
    let total = gempresa + gte + gpl + gredes + gweb + ggoal
    console.log(total)
    let resultado = document.getElementById("resultado")
    if (total <= 11) {
        resultado.innerHTML = "Tu plan ideal es Basic"
    } else if (total >= 12 && total <= 17) {
        resultado.innerHTML = "Tu plan ideal es Social"
    } else {
        resultado.innerHTML = "Tu plan ideal es Dev"
    }
}

sessionStorage.setItem('Email', email)
sessionStorage.setItem('telefono', tel)