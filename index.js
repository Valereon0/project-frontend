const form = document.querySelector('form')

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirm-password').value

    if (password !== confirmPassword) {
        alert('Пароли не совпадают')
        return
    }

    const data = { name, email, password }

    try {
        const response = await fetch('https://project-backend-production-608e.up.railway.app/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })

        if (response.ok) {
            localStorage.setItem('isRegistered', 'true')
            const responseData = await response.json()
            console.log('Регистрация успешна', responseData)
            window.location.href = './main.html'
        } else {
            const errorData = await response.json()
            alert('Ошибка регистрации: ' + errorData.message)
        }
    } catch (error) {
        console.error('Ошибка:', error)
        alert(error)
    }
})






