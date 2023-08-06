// LISTA DE COMPRAS

// con el signo pesos armamos un selector universal para buscar elementos. Podria funcionar como un buscador 

const $= (selector)=> document.getElementById(selector)

const shoppingList=[]

//es la funcion que se ejecuta con el boton y con el enter 

const addItem=()=>{
    let newItem= $('newItemInput').value.toUpperCase()
    shoppingList.push(newItem)
    createList(shoppingList)
    //este reset lo que hace es vaciar el input 
    $('listForm').reset()
}

const createList=(lista)=>{
    //este innet html lo que hace es iniciarme desde un html vacio la funcion 
    $('list').innerHTML=[]
    lista.forEach(item => {
        let liItem=document.createElement('li');
        let liContent= document.createTextNode(`${item}`);
        liItem.appendChild(liContent);
        liItem.classList.add('list-item')
    
        let deleteBtn=document.createElement('button')
        liItem.appendChild(deleteBtn)
        deleteBtn.classList.add('btn')
        deleteBtn.innerText='x'
        deleteBtn.addEventListener('click', () => deleteItem(item))
    
        let editeBtn=document.createElement('button')
        liItem.appendChild(editeBtn)
        editeBtn.classList.add('btn')
        editeBtn.innerText='-'
        editeBtn.addEventListener('click', ()=>editeItem(item))
    
        $('list').appendChild(liItem)
    });
}

$('addButton').addEventListener('click', addItem)

//funcion para eliminar
const deleteItem= (item)=>{
    const itemIndex= shoppingList.indexOf(item)
    shoppingList.splice(itemIndex, 1)
    //un return que me devuelve la lista actualizada
    return createList(shoppingList)
}

//funcion para editar los elementos

const editeItem=(item)=>{
    let newValue= prompt('Cambiar').toUpperCase()
    const itemIndex= shoppingList.indexOf(item)
    shoppingList[itemIndex]= newValue
    return createList(shoppingList)
}

//ejecutar la funcion con un enter

$('newItemInput').addEventListener('keydown', (event)=> {if (event.key === 'Enter') {addItem()}})