const number = document.getElementById('notifyNumber');
const mark = document.getElementById('mark');
const notify = document.querySelector('.notify-box');

mark.addEventListener('click', () => {
    document.querySelectorAll('.notify-box').forEach(e => {
        if (e.classList.contains('unread')) {
            e.classList.remove('unread');
            number.innerText = number.textContent = '0';
            mark.innerText = mark.textContent = 'Mark all as unread';
        } else {
            e.classList.add('unread');
            mark.innerText = mark.textContent = 'Mark all as read';
            number.innerText = number.textContent = '7';
        }
    })
} )
