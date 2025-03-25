# Sistema de Gestión Clínica

Aplicación completa para gestión de clínicas médicas con backend API REST y frontend web.
## Estructura del Proyecto

El proyecto está dividido en dos partes principales:
- **Backend**: API REST desarrollada con Spring Boot
- **Frontend**: Aplicación web desarrollada con React + Vite

## 🚀 Frontend (React - Vite)

### 📋 Requisitos
- Node
- npm

### 🔧 Configuración

1. Clona el repositorio: https://github.com/juampi7237/frontend
```bash
git clone git@github.com:juampi7237/frontend.git
```

### Instalación y ejecución
Dentro de la carpeta del proyecto abrir terminal y ejecutar el siguiente comando para instalar dependencias
```bash
npm install
```

Para ejecutar el proyecto:
```bash
npm run dev
```
El frontend se levantará en el puerto **5173** por defecto.

Puedes acceder a la aplicación en: http://localhost:5173/

### 🔧 Credenciales para loguearte en el sistema
- usuarario: **admin**
- contraseña: **admin**

## 🚀 Backend (Spring Boot)

### Requisitos previos
- Java JDK 17+
- MySQL 8+
- Maven

### Configuración inicial

1. Clonar el repositorio: https://github.com/juampi7237/backend
   ```bash
   git clone git@github.com:juampi7237/backend.git

### Configurar la base de datos:

Asegúrate de tener MySQL instalado y corriendo

Editar el archivo src/main/resources/application.properties con tus credenciales:

```code
spring.datasource.url=jdbc:mysql://localhost:3306/clinica?createDatabaseIfNotExist=true
spring.datasource.username=root    # Cambiar si es necesario
spring.datasource.password=toor    # Cambiar si es necesario
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=create
spring.jpa.show-sql=true

server.servlet.context-path=/api/v1
```

Notas de configuración:

Si usas diferente puerto para MySQL: jdbc:mysql://localhost:<tu_puerto>/clinica...

Si quieres cambiar el puerto de la aplicación, añade: server.port=<puerto_deseado>

### Ejecución del proyecto
Ejecutar la clase principal ClinicaApplication.java

El frontend se levantará en el puerto **8080** por defecto.

Puedes acceder a la aplicación en: http://localhost:8080/api/v1/services

### Endpoints principales
### Servicios
- **GET** - Obtener todos los Servicios: 
~~~
 http://localhost:8080/api/v1/services
~~~ 
- **GET** - Obtener un servicio por id: 
~~~
http://localhost:8080/api/v1/services/{id}
~~~ 
- **POST** - Crear un servicio: 
~~~
http://localhost:8080/api/v1/services
~~~ 
- **PUT** - Actualizar un servicio: 
~~~
http://localhost:8080/api/v1/services/{id}
~~~ 
- **DELETE** - Eliminar un servicio: 
~~~
 http://localhost:8080/api/v1/services/{id}
~~~ 
- **POST** -Agregar productos al servicio: 
~~~
http://localhost:8080/api/v1/services/{id}/add
~~~ 
- **DELETE** - Quitar productos al servicio:  
~~~
http://localhost:8080/api/v1/services/{id}/remove
~~~ 

### Productos
- **GET** - Obtener todos los Productos:
~~~
 http://localhost:8080/api/v1/produts
~~~ 
- **GET** - Obtener un producto por id:
~~~
http://localhost:8080/api/v1/products/{id}
~~~ 
- **POST** - Crear un producto:
~~~
http://localhost:8080/api/v1/products
~~~ 
- **PUT** - Actualizar un producto:
~~~
http://localhost:8080/api/v1/products/{id}
~~~ 
- **DELETE** - Eliminar un producto:
~~~
 http://localhost:8080/api/v1/products/{id}
~~~ 

