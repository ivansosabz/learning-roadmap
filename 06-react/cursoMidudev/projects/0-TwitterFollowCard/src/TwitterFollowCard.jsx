// useState es un HOOK de React. Los hooks empiezan con "use"
import { useState } from "react"

// Los parametros van con DESTRUCTURING: saco las props directamente
// children = lo que puse entre etiquetas en App
// userName = el handle de la cuenta
// initialIsFollowing = estado inicial (true/false), undefined si no lo paso
export function TwitterFollowCard({ children, userName, initialIsFollowing }) {

    // useState devuelve un ARRAY de 2 elementos:
    //   posicion 0 = el valor actual del estado
    //   posicion 1 = una funcion para actualizar ese valor
    // Con ARRAY DESTRUCTURING los asigno a dos variables: isFollowing y setIsFollowing
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    // TERNARIO: condicion ? valor_si_true : valor_si_false
    // Sirve como un if-else en una sola linea
    const texto = isFollowing ? 'Siguiendo' : 'Seguir'

    // Misma logica: elijo una clase CSS segun el estado
    const buttonClassname = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    // Funcion que se ejecuta al hacer click en el boton
    // setIsFollowing recibe el NUEVO valor, que es lo contrario de lo que hay ahora
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    // TEMPLATE STRING (backticks ``) permite meter variables con ${}
                    src={`https://unavatar.io/x/${userName}`}
                    alt="Logo"
                    className='tw-followCard-avatar'
                />
                <div className='tw-followCard-info'>
                    {/* children es el contenido que paso entre etiquetas del componente */}
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                {/*
                  onClick va en CAMELCASE (no onclick como en HTML)
                  Le paso la REFERENCIA a la funcion, NO la ejecuto
                  (no pongo handleClick() porque eso la ejecutaria ya)
                */}
                <button className={buttonClassname} onClick={handleClick}>
                    {texto}
                </button>
            </aside>
        </article>
    )
}