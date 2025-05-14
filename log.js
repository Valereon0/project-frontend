const form = document.querySelector('form')

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value


    const data = { email, password }

    try {
        const response = await fetch('https://project-backend-production-608e.up.railway.app/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        if (response.ok) {
            localStorage.setItem('isRegistered', 'true')
            const responseData = await response.json()
            console.log('Авторизация успешна: ' + JSON.stringify(responseData))
            window.location.href = './main.html'
        } else {
            const errorData = await response.json()
            console.log('Ошибка авторизации: ' + errorData.message)
        }
    } catch (error) {
        console.error('Ошибка:', error)
    }
})