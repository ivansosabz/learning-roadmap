import React from 'react'
import './App.css'
// Importo el componente desde su archivo
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

// export nombrado: al importar se usa { App }, no "import App from"
export function App() {
    return (
        // className en JSX = class en HTML. "class" es palabra reservada en JS
        <section className='App'>
            {/*
              userName es un prop tipo string (va entre comillas)
              initialIsFollowing es un booleano: va entre {} porque es JS
              Lo que va entre <TwitterFollowCard> y </TwitterFollowCard>
              se pasa como prop "children" (el nombre real del usuario)
            */}
            <TwitterFollowCard userName="ivansosabz" initialIsFollowing={true}>
                Iván Sosa
            </TwitterFollowCard>
            {/* Sin initialIsFollowing: por defecto es undefined, que es falsy */}
            <TwitterFollowCard userName="midudev">
                Miguel Ángel Durán
            </TwitterFollowCard>
            <TwitterFollowCard userName="daniloka21" initialIsFollowing={true}>
                Daniela González
            </TwitterFollowCard>
        </section>
    )
}