---
layout: post
title: Tipos de campo en Odoo
subtitle: Campos basicos, de relacion y funcionales
image: /img/icono-odoo.png
tags: [odoo, tipos de campos , ramdom]
---


**1.- Campos básicos**

**Boolean**

Tipo de campo que solo admite dos posibles valores y cuyos se excluyen el uno del otro.

~~~

boolean_field = fields.Boolean()
  
~~~

**Char**

Tipo de campo formado por una cadena de longitud limitada, que se puede ajustar a través de parámetros.

~~~

char_field = fields.Char()
  
~~~

Opciones especificas:

Size: Determina el número máximo de caracteres.
Translate: El campo puede ser traducido.

**Text**

Tipo de campo usado para almacenar textos largos.

~~~

text_field = fields.Text()
  
~~~

**HTML**

Tipo de campo que almacena HTML, proporciona un visor HTML

~~~

html_field = fields.Html()
  
~~~

**Integer**

Tipo de campo que guarda valores numéricos enteros. Si el valor no está establecido, este devuelve 0.

~~~

int_field = fields.Integer()
  
~~~

**Float**

Tipo de campo que almacena valores decimales. Si el valor no está establecido este devuelve 0,0. 
Si se establece la opción de dígitos, usará el tipo numérico:

~~~

float_field = fields.Float()
float_field = fields.Float(digits=(32, 32))
float_field = fields.Float(digits=lambda cr: (32, 32))
  
~~~
Opciones especificas:

Digits: Fuerza el uso de tipo numérico en la base de datos. El parámetro puede ser una tupla (longitud parte en entera, longitud parte decimal) o una llamada que devuelve una tupla y coge el cursor como parámetro.


**Date**

Tipo de campo que permite almacenar fechas.

~~~

date_field = fields.Date()
  
~~~
Opciones especificas:

context_today: Devuelve la fecha del día actual, está basado en la zona horaria.
today: Devuelve la fecha actual en formato cadena.
from_string: Devuelve el valor datetime.date() en tipo cadena.
to_string: Retorna el valor de la función datetime.date en formato cadena.

**Datetime**

Tipo de campo que almacena valores de tipo fecha y hora.

~~~

datetime_field = fields.Datetime()
  
~~~
Opciones especificas:

context_timestamp: Devuelve la fecha y hora actual, basado en el formato de zona horaria.
Now: Devuelve la fecha y hora actual del sistema.
from_string: Devuelve el valor datetime.date() en tipo cadena.
To_string: Devuelve el valor de la función datetime.date en formato cadena.

**Binary**

Tipo de campo que almacena valores codificados en base64.

~~~

binary_field = fields.Binary()
  
~~~

**Selection**

Tipo de campo que almacena un texto en la base de datos, que permite al usuario hacer una selección entre varios valores predefinidos. 
La selección se puede establecer como una lista de tuplas o una llamada que devuelva una lista de tuplas.

~~~

selection_field = fields.Selection([('a', 'A')])
selection_field = fields.Selection(selection=[('a', 'A')])
selection_field = fields.Selection(selection='a_function_name')
  
~~~

Opciones especificas:

Selection: Lista de tuplas o una función que retorna una lista de tuplas.
Size: La opción size=1 es obligatoria cuando se está usando indices que son enteros y no cadenas

**Reference**

Tipo de campo que almacena una referencia arbitraria de un modelo y una fila.

~~~

refence_field = fields.Reference([('model_name', 'usantString')])
refence_field = fields.Reference(selection=[('model_name', 'String')])
refence_field = fields.Reference(selection='a_function_name')
  
~~~

Opciones especificas:

selection: Una lista de tuplas o llamada que coge un grupo de registros como entrada.


**2.- Tipos de relación**

**Many2one**

Tipo de campo que almacena una relación de muchos (n) a uno (1).

~~~

field_id = fields.Many2one('res.users') 
field_id = fields.Many2one(comodel_name='res.users')
  
~~~
Opciones especificas:

comodel_name: Nombre del model opuesto.

**One2Many**

Tipo de campo que almacena una relación de uno (1) a muchos (m).

~~~

field_ids = fields.One2many('res.users', 'rel_id')
field_ids = fields.One2many(comodel_name='res.users',inverse_name='rel_id')
  
~~~
Opciones especificas:

comodel_name: Nombre del modelo opuesto.
inverse_name: Relaciona la columna del modelo opuesto.

**Many2many**

Tipo de campo que almacena una relación de muchos (m) a muchos (n), se crea una nueva tabla con las claves primarias de ambos.

~~~

field_ids = fields.Many2many('res.users')
field_ids = fields.Many2many(comodel_name='res.users',relation='table_name',column1='col_name',column2='other_col_name')
  
~~~
Opciones especificas:

comodel_name: nombre del modelo opuesto.
relation: nombre de la tabla relacionada.
column1: nombre de la columna que proviene del identificador de la tabla de la izquierda de la relación.
column2: nombre de la columna que proviene del identificador de la tabla de la derecha de la relación.

**3.- Campos funcionales**

**Campos Calculados**

Para la definición solo es necesario el atributo compute y el nombre del método del que obtendrá el resultado.

~~~

computed_field = fields.Float(compute='compute_total')

def compute_total(self):
    ...
    self.computed_total = x
  
~~~

**Campos relacionados**

Simplemente establece el argumento del nombre relacionado con su modelo.

~~~

rel_field = fields.Char(string='Name',related='partner_id.name')
  
~~~
El parámetro store nos permite almacenar el valor en la base de datos.
~~~

rel_field = fields.Char(string='Name',store=True, related='partner_id.name')
  
~~~

**Property field**

Hay algunos casos donde el valor del campo debe cambiar dependiendo de la compañía activa del usuario. 
Para activar dicho comportamiento, se puede usar la opción company_depent (aka property field).
