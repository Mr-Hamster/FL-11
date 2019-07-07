const login1 = 'user@gmail.com';
const login2 = 'admin@gmail.com';
const password1 = 'UserPass';
const password2 = 'AdminPass';
const ValidationLogin = 6;
const ValidationPassword = 5;
let login = prompt('Please, enter your email:');
if(!login){
    alert('Canceled.');
}else if(login.length < ValidationLogin){
    alert("I don't know any emails having name length less than 6 symbols");
}else if(login === login1 || login === login2){
    let password = prompt('Please, enter your password:');
    if(!password){
        alert('Canceled.');
    }else if(login === login1 && password === password1 || login === login2 && password === password2){
        let changePassword = confirm('Do you want to change your password?');
        if(changePassword){
            let oldPassword = prompt('Please, enter your old password:');
            if(!oldPassword){
                alert('Canceled');
            }else if(login === login1 && oldPassword === password1 || login === login2 && oldPassword === password2){
                let newPassword = prompt('Please, enter the new password:');
                if(newPassword.length < ValidationPassword){
                    alert('It’s too short password. Sorry.');
                }else{
                    let confirmPassword = prompt('Please, repeat new password:');
                    if(confirmPassword === newPassword){
                        alert('You have successfully changed your password.');
                    }else{
                        alert('You wrote the wrong password.');
                    }
                }       
            }else{
                alert('Wrong password.')
            }
        }else{
            alert('You have failed the change');
        }
    }else{
        alert('Wrong password');
    }
}else{
    alert("I don't know you.");
}