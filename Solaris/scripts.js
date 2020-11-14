$(document).ready(function () {

    let modelSpec,
        modelPrice,
        modelSpecHolder,
        modelPriceHolder;
    
    modelSpecHolder = $('#modelSpec');
    modelPriceHolder = $('#modelPrice');

    modelPrice = 0; // cena początkowa wyzerowanie
    modelSpec = ''; // początkowe podsumowanie wyzerowanie

    // podsumowanie przy ladowaniu strony
    calculatePrice();
    compileSpecs();

    // zmina ceny, wybranych opcji przy wyboru
    $('#autoForm input').on('change', function () {
        calculatePrice();
        compileSpecs();
    });

    // oblicznie ceny
    function calculatePrice() {
        let modelPriceEngine = Number($('input[name=engine]:checked', '#autoForm').val());
        let modelPriceTransmission = Number($('input[name=transmission]:checked', '#autoForm').val());
        let modelPriceInsurance = Number($('input[name=insurance]:checked', '#autoForm').val());
        modelPrice = modelPriceEngine + modelPriceTransmission + modelPriceInsurance;
    //    console.log(modelPrice);
        modelPriceHolder.text(numberWithSpaces(modelPrice) + ' zł');
    };

    // dodawanie spacij w liczbach
    function numberWithSpaces(num) {
    return result = num.toLocaleString();
    }

    // zbieranie wybranych opcij w podsumowanie
    function compileSpecs() {
        modelSpecs = $('input[name=engine]:checked + label', '#autoForm').text();
        modelSpecs += ', ' + $('input[name=transmission]:checked + label', '#autoForm').text();
        modelSpecs += ', ' + $('input[name=insurance]:checked + label', '#autoForm').text();
        //   console.log(modelSpecs);
        modelSpecHolder.text(modelSpecs);
    }

    // Wybór koloru
    $('#colorSelector .colorItem').on('click', function () {
        let imgPath = $(this).attr('data-img-path');
    //    console.log(imgPath);
        $('#imgHolder img').attr('src', imgPath);
    });

    // for check $('h4').addClass('selected'); 
});