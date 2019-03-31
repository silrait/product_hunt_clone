
$( () => {
    $('#confirmpassword').change(checkPasswordsMatch)
    $("form").submit((e) =>{
        checkPasswordsMatch()
    })
})

function checkPasswordsMatch(){
    let passwords = $("input[type='password']")

    passwords.addClass( ( passwords[0].value !== passwords[1].value)? 'is-invalid' : 'is-valid')
    passwords.removeClass( !( passwords[0].value !== passwords[1].value)? 'is-invalid' : 'is-valid')

    passwords[1].setCustomValidity( ( passwords[0].value !== passwords[1].value)? 'Passwords must be equal' : '' )
}
