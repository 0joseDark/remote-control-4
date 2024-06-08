async function sendCommand(pin, state) {
    try {
        const response = await fetch('/control', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ pin, state })
        });
        const data = await response.text();
        console.log(data);
    } catch (error) {
        console.error('Erro ao enviar comando:', error);
    }
}
