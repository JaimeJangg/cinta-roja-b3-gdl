
// console.log("Me ejecuto primero");

// setTimeout(() => {
//     console.log("yo voy segundo");
// }, 2000);

// console.log("yo voy tercero")

// const sumarTodos = (max, callback) => {
//     let resultado = 0;

//     setTimeout(() => {
//         for (let i = 0; i < max; i++){
//             resultado = resultado + i;
//         }
//         callback(resultado)
//     }, 5000);
// }

// sumarTodos(15, (resultadoSuma) => {
//     console.log(resultadoSuma);
// });

// sumarTodos(10, (resultadoSuma) => {
//     const masDiez = resultadoSuma + 10;
//     console.log(masDiez);
// })
//


const sumarTodos = (max) => {
    return new Promise((resolve, reject) => {
        if (max <= 0) {
            return reject("debe ser mayor que 0");
        }
        let resultado = 0;

        setTimeout(() => {
            for (let i = 0; i < max; i++){
                resultado = resultado + i;
            }
            resolve(resultado)
        }, 5000);
    })
}

sumarTodos(10).then((res) => {
    console.log(res);
})

sumarTodos(0).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err)
})