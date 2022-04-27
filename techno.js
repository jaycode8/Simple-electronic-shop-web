// function welkam(){
//     alert('welkam all')
// }

// --------------------------------toggle menu bar-------------------------------------
function menutoggle(){
    document.getElementById('nav').classList.toggle('active')
}

//----------------------------------ul list active-----------------------------
function navlist(){
    $(document).on('click','ul li',function(){
        $(this).addClass('active')
    })
}


//--------------------------------------single product----------------------------------
function gallery(){
    let image=document.getElementById('galler')
    let imgbtn=document.getElementsByClassName('small-images')

    imgbtn[0].onclick=function(){
        image.src=imgbtn[0].src
    }
    imgbtn[1].onclick=function(){
        image.src=imgbtn[1].src
    }
    imgbtn[2].onclick=function(){
        image.src=imgbtn[2].src
    }
    imgbtn[3].onclick=function(){
        image.src=imgbtn[3].src
    }
}
// ----------------------------acounts-----------------------------
function btns(){
    let logbtn=document.getElementById('logbtn')
    let regbtn=document.getElementById('regbtn')
    let card=document.getElementById('card')

    regbtn.onclick=function(){
        card.style.transform='translateX(-100%)'
    }
    logbtn.onclick=function(){
        card.style.transform='translateX(0%)'
    }
}

function validate(){
    let nameer=document.getElementById('icon1')
    let emailer=document.getElementById('icon2')
    let passwer=document.getElementById('icon3')
    let confer=document.getElementById('icon4')

    let inputone=document.getElementById('inputname')
    let inputtwo=document.getElementById('inputemail')
    let inputthree=document.getElementById('inputpss')
    let inputfour=document.getElementById('inputconf')

    if(document.myForm.user.value==''){
        // alert('Provide a UserName')
        inputone.classList.add('error')
        nameer.style.display='block'
        document.myForm.user.focus()
        return false
    }
    if(document.myForm.email.value==''){
        // alert('Provide Your Email Address')
        inputtwo.classList.add('error')
        nameer.style.display='none'
        emailer.style.display='block'
        document.myForm.email.focus()
        return false
    }
    if(document.myForm.passw.value==''){
        // alert('Provide a Password')
        inputthree.classList.add('error')
        nameer.style.display='none'
        emailer.style.display='none'
        passwer.style.display='block'
        document.myForm.passw.focus()
        return false
    }
    if(document.myForm.conf.value==''){
        // alert('Password confirmation required ! ')
        inputfour.classList.add('error')
        nameer.style.display='none'
        emailer.style.display='none'
        passwer.style.display='none'
        confer.style.display='block'
        document.myForm.conf.focus()
        return false
    }
    if(document.myForm.passw.value!=document.myForm.conf.value){
        // alert('Password mismatch')
        nameer.style.display='none'
        emailer.style.display='none'
        passwer.style.display='none'
        confer.style.display='block'
        inputfour.classList.add('mismatch')
        document.myForm.conf.focus()
        return false
    }
    // console.log(document.myForm.user.value)
    // console.log(document.myForm.email.value)
    // console.log(document.myForm.passw.value)
    // return false
}


//-------------------password hide and show------------------
function rayc(){
    let x=document.getElementById('myinput')

    if(x.type=='password'){
        x.type='text'
        document.getElementById('hidden').style.display='inline-block'
        document.getElementById('show').style.display='none'
    }
    else{
        x.type='password'
        document.getElementById('hidden').style.display='none'
        document.getElementById('show').style.display='inline-block'
    }
}


//------------------------cart---------------------------------------
function purchase(){
    let container=document.getElementById('buy')
    let buyitem=document.createElement('buyying')
    container.appendChild(buyitem)
}

//=======================toggle themes===============
function jayrac(){
    let tog=document.querySelector('.theme')
    let bag=document.querySelector('.header')
    let bag1=document.querySelector('body')
    let bag2=document.querySelector('.latest')

    tog.onclick=function(){
        bag.classList.toggle('dark')
        bag1.classList.toggle('dark')
        bag2.classList.toggle('dark')
    }
}
// window.onscroll = (event) =>{
//     document.getElementById('nav').style.position='static'
// }