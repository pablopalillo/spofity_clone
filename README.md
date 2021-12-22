# Spotify Clone
Demo creado con **Python (Django)** y **React**

### Pre requisitos
El proyecto esta creado con base a las siguientes frameworks con su respectiva documentación por si desea consultar.

1. [Django Framework](https://docs.djangoproject.com/en/3.0)

2. [PostgreSQL Database](https://www.postgresql.org/)

2. [React](https://es.reactjs.org/)

### Instalación
Una vez clonado el proyecto con el sistema e versiones **git** y idealmente teniendo el ambiente virtual creado ,con el sistema paquetes de python **pip**. se instalan 
las dependencias faltantes asociadas al proyecto que se encuentran en el archivo **requirements.txt**.

```
pip install -r requirements.txt 
```

###  Migración base de datos

Una vez configurado el proyecto en general procedemos a hacer la migración inicial para dejar funcionando la base de datos.
Todo esto con ayuda del asistente de Django y el ambiente virtual activado.

```
python manage.py migrate                              
```


### Puesta en marcha
Una vez estén configurados los puntos anteriores puedes poner en marcha el proyecto.

Es necesario crear un super usuario para poder administrar el menú.

```
python manage.py createsuperuser
```

En la carpeta front en /spotify_clone_front para poner en marcha el entorno grafico.

1. Primero debemos instalar las dependencias del proyecto.

```
yarn install
```

```
yarn start
```

2. ponemos en marcha con el comando.
```
yarn start
```


## API Docs

**POST /api/api-token-auth**

Obtiene el Token de autenticación para ese usuario.
### Example Request:

```
{
	"username": "customnamealias",
	"password": "mypassword"
}
```

### Retorno Request
- token autenticacón

### Example request
```
{
	"token": "d0199f2002244458042039da2f3e47c8787xxxx"
}
```

**POST /api/user**

Guarda un usuario nuevo en el sistema.

### Example request
```
{
"username": "pablopalillo",
"email": "pablo@hotmail.com",
"password": "melosito"
}
```

### Response
- request status : 201, 400, 404

**GET /api/podcasts**

Obtiene la lista de podcast guardadas en el sitema.

***Autenticación por token requerida***

### Response
```
[
	{
		"id": 99,
		"name": "nombre podcast",
		"description": "descripcion podcast",
		"image": "http://127.0.0.1:8000/media/image.png",
		"author": "Larry Page",
		"create_date": "2021-12-19"
	}
]
```

**GET api/favorites/(id_usuario)**

Obtiene la lista de podcast guardadas en el sitema enviando por GET el identificador del usuario.

***Autenticación por token requerida***

### Response
```
[
	{
		"id": 1,
		"user": {
			"username": "pablo",
			"email": "pablo@ejemplo.com"
		},
		"podcast": {
			"id": 1,
			"name": "viernes bilingues",
			"description": "descripcion del podcast bilinguies",
			"image": "/media/image.jpg",
			"author": "Larry",
			"create_date": "2021-12-20"
		}
	},
	{
		"id": 9,
		"user": {
			"username": "pablo",
			"email": "pablo@ejemplo.com"
		},
		"podcast": {
			"id": 1,
			"name": "ejemplo podcast",
			"description": "descripcion del podcast bilinguies",
			"image": "/media/image.jpg",
			"author": "Larry",
			"create_date": "2021-12-20"
		}
	}
]
```

**POST api/favorite**

Guarda un nuevo favorito correspondiente al usuario en el sistema.

***Autenticación por token requerida***

### Example request
```
{ 
	"podcast": 4,
	"user": 4
}
```


### Response
- codigo respuesta 201, 400, 404
