# Trabajo Practico Integrador Final

## Consigna

Crear una aplicacion web utilizando `React` que permita gestionar una lista de tareas. La aplicacion debera hacer uso de componentes funcionales, el hook `useState` para el manejo de estado, el hook `useEffect` para realizar efectos secundarios, y eventos para interactuar con el usuario.

## Requerimientos

### Componentes Funcionales

- Componentes de lista de tareas (TaskList):

  - Este componente debera mostrar la lista de tareas.

  - Recibira como propiedades la lista de tareas y funciones para gestionar evento relacionados con las tareas (marcar como completada, eliminar, etc).

  - Cada tarea debe representarse mediante un componenten TaskItem.

- Componente de Tarea (TaskItem):

  -Este componente debera representar individualmente una tarea.

  - Mostrara el nombre de la tarea y el boton para completarla.

  - Utilizara el estado local para gestionar la apariencia de la tarea (Completada, pendiente, en curso, etc).

- Componente Formulario (TaskForm):

  - Este componente contendrá un formulario para agregar nuevas tareas.
  
  - Utilizará el estado local para gestionar la entrada del usuario y enviará la nueva tarea a la lista principal.

### Estado con useState

- Estado Principal (Tasks):

  - Utilizar el hook useState en el componente principal para gestionar el estado de la lista de tareas.

  - Cada tarea debe ser un objeto con propiedades como id, nombre, y completada.

- Efectos con useEffect:
  - Efecto de Actualización (useEffect en el componente principal).
  
  - Utilizar useEffect para realizar una acción (por ejemplo, mostrar un mensaje) cuando el estado de la lista de tareas cambie

### Interaccion con el Usuario a traves de eventos

- Eventos en Componente de Lista (TaskList):

  -Implementar eventos que permitan al usuario interactuar con cada tarea (marcar como completada, eliminar, etc).

  - Estos eventos deberán modificar el estado principal (tasks).

- Eventos en Componente de Formulario (TaskForm):
  - Implementar eventos para gestionar la entrada del usuario y agregar nuevas tareas a la lista.

### Estilo y Diseño

- Apicar estilos `CSS` para mejorar la apariencia de los componentes. Podemos utilizar bibliotecas como `styled-components`.

### Puntos Extra

- Implementar la persistencia de datos utilizando `localStorage` para que las tareas persistan incluso despues de recargar la pagina.

a
