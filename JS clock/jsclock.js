
        setInterval(setClock,1000)/* everything is calculated in millisecond */

        const hourhand=document.querySelector('[data-hour-hand]')
        const minutehand=document.querySelector('[data-minute-hand]')
        const secondhand=document.querySelector('[data-second-hand]')
 

        function setClock(){
            const currentDate=new Date()
            const secondratio=currentDate.getSeconds()/60
            const minuteratio=( secondratio + currentDate.getMinutes())/60
            const hourratio=( minuteratio + currentDate.getHours())/12
            setRotation(hourhand,hourratio)
            setRotation(minutehand,minuteratio)
            setRotation(secondhand,secondratio)
        }

       
        function setRotation(element,rotationRatio){
            element.style.setProperty('--rotation',rotationRatio * 360)

        }
  
        setclock()

    