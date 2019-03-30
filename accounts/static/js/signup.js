
$( () => {
    $('#confirmpassword').change(checkPasswordsMatch)
    $("form").submit((e) =>{
        return checkPasswordsMatch()
    })
})

function checkPasswordsMatch(){
    let passwords = $("input[type='password']")

    passwords.addClass( ( passwords[0].value !== passwords[1].value)? 'is-invalid' : 'is-valid')
    passwords.removeClass( !( passwords[0].value !== passwords[1].value)? 'is-invalid' : 'is-valid')
    return ( passwords[0].value !== passwords[1].value)? false : true
}
