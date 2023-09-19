---
layout: post
title: Instalar Odoo 16 en Ubuntu Server 22.04
subtitle: Instalar Odoo 16 en Ubuntu Server 22.04
image: /img/icono-odoo.png
tags: [python, libreria,Packaging ,Projects,odoo 16, Comunidad]
---


**Tutorial para Instalar Odoo 16 en Ubuntu Server 22.04**

**1.- Actualizar lista de repositorios**


~~~
sudo apt update && sudo apt upgrade
~~~

**2.- Instalar paquetes y dependencias**

~~~
sudo apt install git wget nodejs npm python3 build-essential libzip-dev python3-dev libxslt1-dev python3-pip libldap2-dev python3-wheel libsasl2-dev python3-venv python3-setuptools node-less libjpeg-dev xfonts-75dpi xfonts-base libpq-dev libffi-dev fontconfig net-tools
~~~

**3.- Instalar wkhtmltopdf**

~~~
wget https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6.1-2/wkhtmltox_0.12.6.1-2.jammy_amd64.deb

sudo dpkg -i wkhtmltox_0.12.6.1-2.jammy_amd64.deb
~~~

**4.- Crear una nueva cuenta para Odoo**

~~~
sudo adduser --system --group --home=/opt/odoo --shell=/bin/bash odoo
~~~

**5.- Instalar PostgreSQL**

~~~
sudo apt install postgresql -y
sudo su - postgres -c "createuser -s odoo"
~~~


