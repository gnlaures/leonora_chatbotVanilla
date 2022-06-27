const cForm__checkMinPrice__zipCodePriceList = [
    {
        zipCodeInitial: "20000000",
        zipCodeEnd: "28999999",
        minPrice: 1E5
    },
    {
        zipCodeInitial: "90000000",
        zipCodeEnd: "99999999",
        minPrice: 1E5
    },
    {
        zipCodeInitial: "88000000",
        zipCodeEnd: "89999999",
        minPrice: 6E4
    },
    {
        zipCodeInitial: "70000000",
        zipCodeEnd: "72799999",
        minPrice: 1E5
    },
    {
        zipCodeInitial: "72800000",
        zipCodeEnd: "73699999",
        minPrice: 1E5
    },
    {
        zipCodeInitial: "73000000",
        zipCodeEnd: "73699999",
        minPrice: 1E5
    },
    {
        zipCodeInitial: "73700000",
        zipCodeEnd: "76799999",
        minPrice: 1E5
    },
    {
        zipCodeInitial: "79000000",
        zipCodeEnd: "79999999",
        minPrice: 1E5
    },
    {
        zipCodeInitial: "40000000",
        zipCodeEnd: "48999999",
        minPrice: 15E4
    },
    {
        zipCodeInitial: "49000000",
        zipCodeEnd: "49999999",
        minPrice: 15E4
    },
    {
        zipCodeInitial: "50000000",
        zipCodeEnd: "56999999",
        minPrice: 15E4
    },
    {
        zipCodeInitial: "57000000",
        zipCodeEnd: "57999999",
        minPrice: 15E4
    },
    {
        zipCodeInitial: "58000000",
        zipCodeEnd: "58999999",
        minPrice: 15E4
    },
    {
        zipCodeInitial: "59000000",
        zipCodeEnd: "59999999",
        minPrice: 15E4
    },
    {
        zipCodeInitial: "60000000",
        zipCodeEnd: "63999999",
        minPrice: 15E4
    },
    {
        zipCodeInitial: "64000000",
        zipCodeEnd: "64999999",
        minPrice: 15E4
    },
    {
        zipCodeInitial: "65000000",
        zipCodeEnd: "65999999",
        minPrice: 15E4
    },
    {
        zipCodeInitial: "80000000",
        zipCodeEnd: "87999999",
        minPrice: 1E5
    },
    {
        zipCodeInitial: "01000000",
        zipCodeEnd: "19999999",
        minPrice: 1E5
    },
    {
        zipCodeInitial: "29000000",
        zipCodeEnd: "29999999",
        minPrice: 1E5
    },
    {
        zipCodeInitial: "30000000",
        zipCodeEnd: "39999999",
        minPrice: 1E5
    }
];

function numberToBRL(num) {
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return formatter.format(num);
}
function checkRangeCep(cep) {
    let finalPrice = '';
    cForm__checkMinPrice__zipCodePriceList.forEach((item) => {
        if ((cep >= item.zipCodeInitial) && (cep <= item.zipCodeEnd)) {
            finalPrice = numberToBRL(item.minPrice / 100);
        }
    });
    return finalPrice;
}

document.querySelectorAll('.js-checkMinPrice').forEach((form) => {
    form.addEventListener('submit', () => {
        // get cep value
        let cep_el = document.querySelector('.js-checkMinPrice__cep');
        let cep_val = cep_el.value.replace('-', '');
        let cepNumber = Number(cep_val)

        // show feedback
        document.querySelectorAll('.js-checkMinPrice__feedback').forEach((fb) => {
            fb.classList.remove('u-dnone')
        });

        document.querySelectorAll('.js-checkMinPrice__value').forEach((vl) => {
            if (cep_val.length === 8) {
                if (checkRangeCep(cepNumber)) {
                    vl.innerHTML = 'Valor mínimo de compras para o CEP informado: <strong>' + checkRangeCep(cepNumber) + '</strong>'
                } else {
                    vl.innerText = 'Não atendemos o CEP Informado.'
                }
            } else {
                vl.innerText = 'Digite o CEP corretamente';
            }
        });
    })
})