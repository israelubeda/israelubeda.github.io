---
layout: post
title: Interfaz de usuario – Personalización de vistas
subtitle: Campos basicos, de relacion y funcionales
image: /img/icono-odoo.png
tags: [odoo, tipos de campos , ramdom , interfaz]
---


**1.- Modificar las vistas existentes**

**Ejemplo**

Un buen ejemplo sería extender la vista lista de productos para añadir el campo “Impuesto de cliente” en la misma

![Captura1]( /img/odoo1.JPG)


Para empezar, necesitamos el nombre y el objeto de la vista que queremos heredar. Activamos el modo desarrollador y desde la vista lista de productos pulsamos en 
“Menú desarrollador > Editar TreeVista”.

{: .box-note}
**Nombre de la vista:** product.template.product.tree
**Objeto:** product.template

![Captura1]( /img/odoo2.JPG)


Definimos la nueva vista de extensión desde el menú ( Configuración > Técnico > Interfaz de usuario > Vistas ):

{: .box-note}
**Nombre de la vista:** Herencia vista lista de productos
**Tipo de vista:** Árbol
**Objeto:** product.template (el objeto de la vista base obtenido en el paso anterior)
**Vista heredada:** product.template.product.tree (el nombre de la vista base obtenido en el paso anterior)
**Ver modo heredado:** Vista de extensión
**Estructura:** utilizamos la siguiente estructura para añadir la columna con el precio de venta al final de la lista:

~~~
<data>
    <tree>
        <field name="taxes_id"/>
    </tree>
</data>

~~~

![Captura1]( /img/odoo3.JPG)


Guardamos la vista y volvemos a la lista de productos. Si todo ha funcionado correctamente deberíamos ver una columna nueva con el campo definido en la vista de extensión,
en este caso Impuesto de cliente

![Captura1]( /img/odoo4.JPG)
