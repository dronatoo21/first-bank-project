document.getElementById('login-submit').addEventListener('click', function(){
    const getUserEmail = document.getElementById('user-email');
    const userEmail = getUserEmail.value; 
    
    const getUserPassword = document.getElementById('user-password');
    const userPassword = getUserPassword.value;

    if(userEmail === 'fahim@gmail.com' && userPassword === 'begins'){
        window.location.href = 'bank.html';
    }
    else{
        alert('incorrect email or password');
    }
});