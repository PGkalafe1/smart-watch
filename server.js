const express = require('express');
const app = express();
const PORT = 3000;

// یک API ساده برای هشدارها
app.get('/api/alarms', (req, res) => {
    res.json({ alarms: ["14:30", "08:00"] });
});

app.listen(PORT, () => {
    console.log(`سرور اجرا شد در http://localhost:${PORT}`);
});