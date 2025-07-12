const updateClock = () => {
    const now = new Date();
    document.getElementById('time').textContent = now.toLocaleTimeString('fa-IR');
};

const setAlarm = () => {
    const time = prompt("زمان هشدار (مثال: 14:30)");
    if (!time || !time.includes(':')) return;
    
    const alarmItem = document.createElement('div');
    alarmItem.className = 'alarm-item';
    alarmItem.innerHTML = `
        <span>${time}</span>
        <button class="delete-btn" onclick="this.parentElement.remove()">
            <i class="fas fa-trash"></i>
        </button>
    `;
    document.getElementById('alarms').appendChild(alarmItem);
};

const checkAlarms = () => {
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    document.querySelectorAll('.alarm-item span').forEach(item => {
        if (item.textContent === currentTime) {
            alert('⏰ هشدار!');
            item.parentElement.remove();
        }
    });
};

setInterval(updateClock, 1000);
setInterval(checkAlarms, 1000);
updateClock();