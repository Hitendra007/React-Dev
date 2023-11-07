
const reactElement={
           type:'a',
           props:{
            href:'www.google.com',
            target:'_blank'
           },
           children:'Click me to visit google'
}
const mainContainer = document.getElementById('root')
CustomRender(reactElement,mainContainer);
function CustomRender(reactElement,mainContainer)
{
    const domElement=document.createElement(reactElement.type);
    // domElement.innerHTML=reactElement.children;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);
    props=reactElement.props
    for(const prop in reactElement.props){
           domElement.setAttribute(prop,reactElement.props[prop])
    }
    domElement.innerHTML=reactElement.children;
    mainContainer.appendChild(domElement);
    main container
}