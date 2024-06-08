#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Flask, request
from gpiozero import LED
import RPi.GPIO as GPIO

app = Flask(__name__)

# Configuração dos pinos GPIO como saídas
led_pins = [17, 27, 22, 23]
leds = [LED(pin) for pin in led_pins]

@app.route('/gpio', methods=['POST'])
def control_gpio():
    data = request.json
    pin = data.get('pin')
    state = data.get('state')
    if pin in led_pins:
        led = leds[led_pins.index(pin)]
        if state == 'on':
            led.on()
        else:
            led.off()
        return f'Pino {pin} {state}', 200
    return 'Pino inválido', 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
