---
layout: post
title: Packaging Python Projects Español
subtitle: Libreria Paquetes personalizados Python
image: /img/python.png
tags: [python, libreria,Packaging ,Projects]
---


**1.- Tutorial para agregar un package simple al proyecto Python**

**Un proyecto simple**

Primero instalaremos pip
~~~
python3 -m pip install --upgrade pip
~~~

Crear estructura del proyecto de la siguiente forma:

~~~
packaging_tutorial/
└── src/
    └── example_package_YOUR_USERNAME_HERE/
        ├── __init__.py
        └── example.py
~~~

el archivo __init__.py quedara de momento vacio
el archivo example.py quedara de esta manera

~~~
def add_one(number):
    return number + 1
~~~

**Creacion del los archivos que contiene el paquete**

La estructura de los archivos que contiene los paquetes es la siguiente:

~~~
packaging_tutorial/
├── LICENSE
├── pyproject.toml
├── README.md
├── src/
│   └── example_package_YOUR_USERNAME_HERE/
│       ├── __init__.py
│       └── example.py
└── tests/
~~~

Directorio "test/" quedara de momento vacio

**Creando pyproject.toml**

~~~
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"
[project]
name = "example_package_YOUR_USERNAME_HERE"
version = "0.0.1"
authors = [
  { name="Example Author", email="author@example.com" },
]
description = "A small example package"
readme = "README.md"
requires-python = ">=3.7"
classifiers = [
    "Programming Language :: Python :: 3",
    "License :: OSI Approved :: MIT License",
    "Operating System :: OS Independent",
]

[project.urls]
"Homepage" = "https://github.com/pypa/sampleproject"
"Bug Tracker" = "https://github.com/pypa/sampleproject/issues"
~~~


**Creando README.md**

~~~
# Example Package

This is a simple example package. You can use
[Github-flavored Markdown](https://guides.github.com/features/mastering-markdown/)
to write your content.
~~~
**Creando LICENSE**
~~~
Copyright (c) 2018 The Python Packaging Authority

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
~~~

**Generando los archivos de la distribucion**

instalar libreria build
~~~
python3 -m pip install --upgrade build
~~~

Ahora en el mismo directorio de archivo "pyproject.toml" debemos correr el siguiente comando:
~~~
python3 -m build
~~~

si todo sale bien, deberia crear las siguientes carpetas ( dist ):

~~~
dist/
├── example_package_YOUR_USERNAME_HERE-0.0.1-py3-none-any.whl
└── example_package_YOUR_USERNAME_HERE-0.0.1.tar.gz
~~~

**Actualizando los archivos de la distribucion**

necesitamos la API de PyPI ( https://pypi.org/ )
Luego instalaremos la libreria twine

~~~
python3 -m pip install --upgrade twine
~~~

una vez instalada correremos el siguiente comando sobre la carpeta dist :

* para servidor de prueba
~~~
python3 -m twine upload --repository testpypi dist/*
~~~

*para produccion
~~~
python3 -m twine upload --repository pypi dist/*
~~~

para username usar "__token__" para la contraseña, usar contraseña API

ejemplo:
~~~
Uploading distributions to https://test.pypi.org/legacy/
Enter your username: __token__
Uploading example_package_YOUR_USERNAME_HERE-0.0.1-py3-none-any.whl
100% ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 8.2/8.2 kB • 00:01 • ?
Uploading example_package_YOUR_USERNAME_HERE-0.0.1.tar.gz
100% ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 6.8/6.8 kB • 00:00 • ?
~~~

Puedes comprobar este ejemplo en: https://test.pypi.org/project/example_package_YOUR_USERNAME_HERE



Fuente: https://packaging.python.org/en/latest/tutorials/packaging-projects/


