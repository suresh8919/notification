const button = document.querySelector("button")
button.addEventListener("click", ()=>{
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
            const notification = new Notification("Example notification",{
                body:"This is more text",
                body:Math.random(),
                data: {hello:"world"},
                // tag:"Welcome Message",
            })
            notification.addEventListener("error",e=>{
                alert("error")
            })
        }
    })
})
let notification// it is the way of declaring the variable 
let interval 
document.addEventListener("visibilitychange",()=>{
    if(document.visibilityState==="hidden"){
        const leaveDate = new Date()
        interval = setInterval(()=>{
        setInterval(()=>{

        } )
        notification=new Notification("Come back please",{
            body:`You have been gone for ${Math.round((new Date()-leaveDate)/1000)}seconds`,
            tag:"Come Back",
        })
    },100)
    }else{
        notification.close()
    }
})