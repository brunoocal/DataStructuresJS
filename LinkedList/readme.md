# Estructuras de Datos

## Linked List

![Anatomía](https://static.platzi.com/media/user_upload/slides_estructuras_datos_js_page-0038-df338d63-caf1-4bcb-86c2-f8cd72e9db73.jpg)

Nodo principal: HEAD
Último nodo: TAIL

### Métodos

| Método            | Descripción                      |
| :---------------- | :------------------------------- |
| `Prepend`         | Agregar un nodo al inicio        |
| `Append`          | Agregar un nodo al final         |
| `Lookup / Search` | Buscar un nodo                   |
| `Insert`          | Insertar un nodo en una posición |
| `Remove`          | Eliminar un nodo en una posición |

## Singly Linked List

![Singly Linked List](https://static.platzi.com/media/user_upload/slides_estructuras_datos_js_page-0041-11c13a63-e3f2-4978-af91-aa1281aa6d9d.jpg)

### Características

- Si deseamos llegar a algún lugar, debemos empezar del Head hasta el lugar especificado
- No podemos regresar una vez hemos avanzado en un lugar, sera necesario volver a hacer otro recorrido
- Lo característico de esta lista es que sus valores están relacionados con su nodo actual y el siguiente (NEXT)

### ¿Porqué están conectados sucesivamente? Y si queremos un valor en particular, ¿porqué hay que recorrer todos los nodos hasta llegar al indicado?

Esto se debe a la forma en la que se guardan los datos de una Singly Linked List en memoria:

![Singly Linked List Memory](https://static.platzi.com/media/user_upload/Captura%20de%20pantalla%202020-12-23%20222805-b04f2bfd-b268-4f4c-96d4-bf45bbbf1188.jpg)

- Las Singly Linked List guardan valores aleatoriamente en memoria, y cuando necesitamos un valor de un nodo, solo tiene la dirección del nodo HEAD y su NEXT, entonces así siempre sabe el valor del siguiente nodo. **Por esto es que hay que siempre recorrerlo desde el inicio**


## Doubly Linked List

![Doubly Linked List](https://static.platzi.com/media/user_upload/slides_estructuras_datos_js_page-0048-79182a24-5d63-4cce-9c4e-b57a1603b0f7.jpg)

### Características

- Si deseamos llegar a algún lugar, podemos empezar por el Head o por la Tail
- Podemos regresar una vez hemos avanzado en un lugar, ya que cada nodo tiene la referencia del nodo anterior y el siguiente
- Esta lista se caracteriza porque cada nodo tiene información del nodo anterior y del siguiente, haciendo posible poder recorrerse sin necesidad de iterar siempre desde el inicio, por lo tanto es más eficiente.

### ¿Cómo se almacena en memoria?

Así se almacena en memoria:

![Doubly Linked List Memory](https://static.platzi.com/media/user_upload/slides_estructuras_datos_js_page-0049-773eaa22-d463-4820-a8f0-f915cb4aef31.jpg)

- Las Doubly Linked List tienen las mismas características que las Singly Linked List, añadiendo que cada nodo tiene su nodo previo y su next a disposición.
