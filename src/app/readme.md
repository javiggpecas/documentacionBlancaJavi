## app-component - **container**
app-component

### Uso:
Módulo principal en donde se carga toda la página.

### Propiedades de app-component:
| **Nombre**      | **Tipo**        | **Descripción** |
| --------------- | --------------- | --------------- |
| ngOnInit() | void | Funcion que se ejecuta al iniciar el componente. |
| isPageLoading() | void | Subscribe and detect when is loading on change route. |
| ngOnDestroy() | void | Funcion que se ejecuta destruir el componente. |

### Dependencies
- Component
- OnInit
- BrowserAnimationsModule
- FontAwesomeModule
- MatProgressSpinnerModule
- AppRoutingModule
- SharedModule.forRoot()
- NavData
