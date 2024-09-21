---
layout: post
title: Crear servidor de Minetest en Ubuntu 20.04.5
subtitle: Paso a paso para configurar un servidor de Minetest en Ubuntu
image: /img/minetest-logo.png
tags: [linux, minetest, servidor, juegos, comunidad]
---

**Guía para crear un servidor de Minetest en Ubuntu 20.04.5**

**1.- Actualización del sistema y dependencias**

Primero, actualiza tu sistema y asegúrate de tener las dependencias necesarias para compilar y ejecutar Minetest.

~~~ 

sudo apt update
sudo apt upgrade -y
sudo apt install build-essential cmake libirrlicht-dev libbz2-dev libpng-dev libjpeg-dev libxxf86vm-dev libgl1-mesa-dev libsqlite3-dev zlib1g-dev libjsoncpp-dev

~~~

**2.- Instalar Minetest desde los repositorios**

Minetest está disponible en los repositorios de Ubuntu, así que puedes instalarlo directamente con el siguiente comando:

~~~ 

sudo apt install minetest-server -y

~~~

**3.- Configuración del servidor**

Una vez instalado, edita el archivo de configuración para personalizar tu servidor:

~~~ 

sudo nano /etc/minetest/minetest.conf

~~~

Algunos parámetros clave que puedes modificar:

~~~ 

server_name = MiServidorMinetest
port = 30000
enable_pvp = true
max_players = 20

~~~

**4.- Iniciar el servidor**

Inicia el servidor de Minetest usando el siguiente comando:

~~~ 

minetestserver --config /etc/minetest/minetest.conf

~~~

Para ejecutar el servidor en segundo plano, puedes usar `screen`:

~~~ 

sudo apt install screen
screen -S minetest
minetestserver --config /etc/minetest/minetest.conf

~~~

**5.- Abrir el puerto en el firewall**

Si estás usando `ufw`, abre el puerto por el que correrá el servidor:

~~~ 

sudo ufw allow 30000/tcp

~~~

**6.- Automatizar el inicio del servidor**

Para que el servidor se inicie automáticamente al arrancar tu sistema, crea un servicio de `systemd`:

~~~ 

sudo nano /etc/systemd/system/minetest.service

~~~

Añade lo siguiente:

~~~ 

[Unit]
Description=Minetest Server
After=network.target

[Service]
ExecStart=/usr/games/minetestserver --config /etc/minetest/minetest.conf
Restart=on-failure

[Install]
WantedBy=multi-user.target

~~~

Luego, habilita y ejecuta el servicio:

~~~ 

sudo systemctl enable minetest
sudo systemctl start minetest

~~~

Con estos pasos tendrás un servidor de Minetest corriendo en tu Ubuntu 20.04.5.