const letterHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                    'A', 'B', 'C', 'D', 'E', 'F'];
const NB_HEX_NUMBER = 16
function generateRandomHexColor(){
    let color = '#'
    for(let i=0; i<6; i++){
        color += letterHex[Math.floor(Math.random() * (NB_HEX_NUMBER - 1))]
    }
    return color
}

let actualColor = generateRandomHexColor()
$('#hex-value').html('&nbsp;'+actualColor)
$('body').css('background-color', actualColor)

$('#btn').click(function(){
    actualColor = generateRandomHexColor()
    $('#hex-value').html('&nbsp;'+actualColor)
    $('body').css('background-color', actualColor)
})