        //Function which adds numbers and  operators to the text field before execution of the operation
        function appendToResult(value) {
            document.getElementById('result').value += value;
        }
        //function Which clears the display when you want to do a different operation
        function clearResult() {
            document.getElementById('result').value = '';
        }
        //This function calculates the entered values by taking the result field and 
        //making the ncessary operations on them before returning the calculated value  
        function calculateResult() {
            const resultField = document.getElementById('result');
            try {
                resultField.value = eval(resultField.value);
            } catch (error) {
                resultField.value = 'Error';
            }
        }