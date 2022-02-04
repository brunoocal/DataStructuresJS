# Estructuras de datos

## Stacks

![Anatomía de un Stack LIFO](https://static.platzi.com/media/user_upload/16-stack-Lifo-9cdca075-4511-4eed-899d-b84596e1aedf.jpg)

Un stack es básicamente una pila, algo que estás **aplinando** lo primero que entra queda en primer lugar,
de ahí el nombre LIFO (Last In First Out). Último en entrar, Primero en salir.

Curiosamente, ¿te recuerda eso a algún logo?

![StackOverflow](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png)

Esta estructura de datos utiliza JavaScript para su [callstack](https://developer.mozilla.org/es/docs/Glossary/Call_stack)

### Características

- No hay manera de buscar ítems intermedios.
- No hay métodos para insertar nuevos items intermedios.
- Solo se puede añadir elementos al final de la pila o remover siempre el último elemento de la pila

### Métodos

| Método | Descripción                          |
| :----- | :----------------------------------- |
| `Pop`  | Remover el último elemento que entró |
| `Push` | Agregar un elemento                  |
| `Peek` | Tomar el último elemento de la línea |
