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
        const editBtn = document.createElement('button')
        delBtn.textContent='Delete'
        editBtn.textContent='Edit'
        // result.appendChild(delBtn)
        list.textContent=inp1
        
        
        list.appendChild(editBtn)
        list.appendChild(delBtn)
       

        result.appendChild(list)
        inp1.value="";

        delBtn.addEventListener('click', () => {
            list.remove(); // Remove the list item when the delete button is clicked
        });

         // Add edit functionality
         editBtn.addEventListener('click', () => {
            const newValue = prompt('Edit your task:', list.firstChild.textContent);
            if (newValue !== null && newValue.trim() !== '') {
                list.firstChild.textContent = newValue; // Update the task text
            }
        });
    }   
    
    // console.log(inp1);
  
    
    
})



