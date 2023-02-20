import Link from "next/link" // Permite hacer navegaciones dentro del mismo sitio
import   styles from './Navigation.module.css'

const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'About',
  route: '/about'
}, {
    label: 'Posts',
    route: '/post'
  }]

export default function Navigation({ children }) { // Envolver rutas por medio de este componente
  return (
    <header className={styles.header}>
        <nav>
        <ul className={styles.navigation}>
            {
            links.map(({label, route}) => (
                <li key={route}> 
                <Link href={route}>
                    {label}
                </Link> 
                </li>
            ))
            }
        </ul>
        </nav>
    </header>
  )
}
 // {children} Todo lo que se renderiza por debajo de nuestra rutas
