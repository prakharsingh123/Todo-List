const addBtn = document.querySelector('#addBtn')

// console.log("add");
const inp1 = document.querySelector('#inp-feild');
addBtn.addEventListener('click',()=>{
    // console.log("add");

    const inp1= document.querySelector('#inp-feild').value;
    
    // console.log(inp1);

    const result = document.querySelector('.result')
    // console.log(result);
    

    if(inp1=='' || inp1==" "){
        alert("Add your tasks")
    }
    else{
        const list = document.createElement('li')

        const delBtn = document.createElement('button')
        delBtn.textContent='Delete'
        // result.appendChild(delBtn)
        list.textContent=inp1
        
        

        list.appendChild(delBtn)

        result.appendChild(list)
        inp1.value="";
    }   
    
    // console.log(inp1);
    
    
})



