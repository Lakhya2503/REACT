import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>lakhan</h1>
        </div>
    )
}

const anotherUser = "lakhan with react"

// const reactElement = {
//     type: 'a',
//     props : {
//         href: 'https://www.google.com/',
//         target: '_blank'
//     },
//     children : "Click me to visit the google"

// }


const anotherElement = (
    <a href='https://www.google.com/'>click me to visit google</a>
)

const reactELement = React.createElement(
    'a',
    {href: "https://www.google.com" , target: '_blank'},
    'muze click karo aur google',
    anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)

