function customRender(reactElement, container) {
    /* this code is for only in practice
    const DomELe = document.createElement(reactElement.type)
    DomELe.innerHTML = reactElement.children
    DomELe.setAttribute('href',reactElement.props.href)
    DomELe.setAttribute('target',reactElement.props.target)

    container.appendChild(DomELe)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appenChild(domElement)        
}



const reactElement = {
    type: 'a',
    props : {
        href: 'https://www.google.com/',
        target: '_blank'
    },
    children : "Click me to visit the google"

}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)