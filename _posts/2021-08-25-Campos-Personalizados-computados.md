---
layout: post
title: Tips Odoo 14.0
subtitle: Computos de campos personalizados

---


**1.- Computos de campos personalizados.**


Comenzamos creando los campos personalizados en Modelos, para el ejemplo se crea un campo llamado x_gramos de tipo Numero Flotante:
image: /img/gramos.JPG


Luego creamos el campo computado, para este ejemplo x_gramosMensuales
image: /img/gramosMensuales.JPG

definimos las Propiedades del campo computado



{: .box-note}
**Campo relacionado Dependencias:** x_gramos

~~~

for record in self:
  record[("x_gramosMensuales")] = record.x_gramos * 30
  
~~~

