# Backend: Simulador de moneda

## Dependencias:
- Python 3.6
- MongoDB 3.4
- pip
- virtualenv

## Crear base de datos:
```
Crear la base de datos llamada ripio_test
```
## Instalacion:
Luego de clonar el repositorio, acceder a la carpeta simulador-backend

```
virtualenv env
source env/bin/activate
pip install -r requirements.txt
python manage.py migrate
```

## Popular la base de datos para pruebas:
```
python manage.py loaddata ripiodbfixture
```
Por default no se asocia al usuario registrado (se puede registrar usuario
desde front) con su respectiva "Account", esto se hace desde el admin, como
asi tambien la creacion de los tipos de moneda o "Currency",
"CurrencyContainer". Por esto ya se cargo en elfixture 3 usuarios con sus
"Account", y cada una con las respectivos "CurrencyContainer". Tambien se
agrego un superusuario para poder manejar el admin.

Nombre usuario | password
------------ | -------------
mariano | ripiotest
user1 | ripiotest
user2 | ripiotest
user3 | ripiotest

## Como correr el servidor:
Una vez dentro de la carpeta simulador-backend
```
source env/bin/activate
python manage.py runserver
```
