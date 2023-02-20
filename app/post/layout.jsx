import Counter from "./Counter";

export default function LayoutPost({children}) { // Es importante el children para que poder mostrar lso demas componenete que envuelven esta ruta o directorio
        return (
        <>
            <h4>El sitio de los Posts</h4>
            <Counter />
            {children}
        </>
    )
}