---
layout: post
title: Creacion de Libreria personalizada Python
subtitle: Libreria personalizada Python
image: /img/python.png
tags: [python, libreria]
---


**1.- Pasos para Crear librería Python**

**Ejemplo**

Pasos para crear una libreria en Python

Para crear una librería en Python que realice una sustitución de letras en palabras, puedes seguir los siguientes pasos:

Crea una nueva carpeta para tu proyecto y navega a ella en la línea de comandos.

Crea un nuevo archivo llamado my_libreria.py en esa carpeta.

Abre my_libreria.py en tu editor de código y agrega el siguiente código:

~~~
def sustituir_letras(palabra):
    sustituciones = {
        'a': 'z',
        'b': 'y',
        'c': 'x',
        # Agrega aquí más sustituciones de letras según tus necesidades
    }
    palabra_sustituida = ''
    for letra in palabra:
        if letra.lower() in sustituciones:
            letra_sustituida = sustituciones[letra.lower()]
            if letra.isupper():
                letra_sustituida = letra_sustituida.upper()
            palabra_sustituida += letra_sustituida
        else:
            palabra_sustituida += letra
    return palabra_sustituida
~~~

En esta función, se define un diccionario sustituciones que mapea las letras originales a las letras sustituidas. Luego, se itera sobre cada letra de la palabra de entrada y, si la letra se encuentra en el diccionario de sustituciones, se reemplaza por la letra sustituida correspondiente. La función también maneja correctamente las mayúsculas y minúsculas.

Guarda el archivo my_libreria.py.

Ahora, crea un archivo llamado setup.py en la misma carpeta y agrega el siguiente código:
~~~
from setuptools import setup

setup(
    name='my_libreria',
    version='1.0.0',
    description='Librería que realiza sustitución de letras',
    author='Tu Nombre',
    author_email='tu@email.com',
    py_modules=['my_libreria'],
    install_requires=[
        # No se requieren dependencias adicionales
    ],
)
~~~
Guarda el archivo setup.py.

Abre una terminal en la carpeta de tu proyecto y ejecuta el siguiente comando para empaquetar tu librería:

~~~
python setup.py sdist

~~~

Esto creará un archivo tar.gz en la carpeta dist de tu proyecto.

Ahora, puedes instalar tu librería en cualquier entorno utilizando pip. Ejecuta el siguiente comando en la terminal:

~~~
pip install dist/my_libreria-1.0.0.tar.gz

~~~

Esto instalará tu librería en el entorno actual.

Puedes utilizar tu librería en un script de Python de la siguiente manera:

~~~
from my_libreria import sustituir_letras

palabra_sustituida = sustituir_letras("hola")
print(palabra_sustituida)  # Resultado: "holz"

~~~

https://github.com/israelubeda/Pasos_Libreria_python





