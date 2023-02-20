import Navigation from './components/Navigation'
import '../style/global.css'
import {fontRoboto} from './font'

export default function RootLayout({ children }) { // Envolver rutas por medio de este componente
  return (
    <html>
      <head />
      {/* <body className={ fontRoboto.className }> */} 
      <body className={ fontRoboto.variable }>
        <Navigation />
        {children} 
      </body>
    </html>
  )
}

// {children} Todo lo que se renderiza por debajo de nuestra rutas