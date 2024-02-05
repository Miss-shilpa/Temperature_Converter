const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').Value;
    // console.log(numberTemp)

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const fahToCel = (fah) => {
        let celsius = Number((fah - 32) * 5/9).toFixed(1); 
        return celsius;
    }

    const celToFah = (cel) => {
        let fahrenheit = Number((cel * 9/5)+ 32).toFixed(1);
        return fahrenheit; 
    }
          
    let result;
    if(inputTemp == 'cel'){
        result = celToFah(inputTemp);
        document.getElementById("result").innerHTML=  `= ${result} °Fahrenheit`;
    }
    else{
        result = fahToCel(inputTemp);
        document.getElementById("result").innerHTML=  `= ${result} °Celsius`;      
    }
}




