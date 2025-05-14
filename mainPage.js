const isRegistered = localStorage.getItem('isRegistered')

if (!isRegistered && window.location.pathname.includes('/main.html')) {
    window.location.href = './index.html'
}