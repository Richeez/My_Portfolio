const primaryContainer = document.querySelector('.primary-container');

console.log(primaryContainer);
const secControls = document.querySelectorAll('.controls-container');

const allControl = document.querySelectorAll('.control');


const allSection = document.querySelectorAll('.section')


const mode = JSON.parse(localStorage.getItem('mode'));

if (mode) {
  
    modeChanger(mode)
    } 
    
function modeChanger(mode) {
    let element = document.body;
    
    if ( mode.lightMode) {
      element.classList.add('light-mode');
      
      
    }
    const toggleMode = document.querySelector('.theme-cont');
  
    toggleMode.addEventListener('click', () => { 
      console.log('clicked');
      element.classList.toggle('light-mode');

      modeSwitch()
    });

  
}



function pageTransition() {

    //* active-btn toggle function

    for (let i = 0; i < allControl.length; i++) {
        
        allControl[i].addEventListener('click', function () {
            
            let currentBtn = document.querySelectorAll('.active-btn');
             
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            
            this.className += ' active-btn';
        });
        
    }
//*selecting each section and adding it on the screen as its btn is clicked on
    primaryContainer.addEventListener('click', (e) => { 

        const clicked = e.target.dataset.id;

        if (clicked) {

            secControls.forEach((btn) => {
                btn.classList.remove('active');
                
            });
            e.target.classList.add('active')

            //*removing active class from previous page
            allSection.forEach((sec) => {
                sec.classList.remove('active');
            });
            const section = document.getElementById(clicked);

            section.classList.add('active')
        }
        modeChanger()
    });


    // //? theme toggle mode

    // let themeToggle = document.querySelector('.theme-cont');

    // themeToggle.addEventListener('click', () => { 
    //     let element = document.body;
    //     element.classList.toggle('light-mode');
    // });
    
}


function modeSwitch() {
   
    let element = document.body;

  

  const mode = [];

  
    mode.push({
      lightMode: element.classList.contains('light-mode')
    });


  localStorage.setItem("mode", JSON.stringify(mode))
  
 }

pageTransition() 