import React from 'react'
import {Link} from 'react-router-dom'
import Styled from 'styled-components'

const HomeWrapper=Styled.div`
    justify-content:space-around;
    width:100%;
    position : fixed;
    top:-2px;
    z-index:20;
    background:white;
    display:flex;
    img{
        margin-left:100px;
        margin-top:10px;
    }
  
    span{
        font-size : 10px;
        margin-left : 15px;
        justify-content : center;
    }
    ul li{
        display : inline-block;
        
    }
    li{
        margin-left:50px;
    }
    button{
        background:transparent;
        border:1px solid grey;
        padding:10px;
        margin-top:10px;
    }
    .flex{
        display:flex;
        flex-direction:row;
    }
`

const BackgroundWrapper=Styled.div`
   z-index:1
   margin-right:10px
  img{
        width:100%;
      height:800px;  
    }
`
const MiddleWrapper=Styled.div`
    position:relative;
    top:-500px;
    z-index:15;
    text-align:center;
    color:white;
    font-size:40px;
    font-weight:lighter;
    p{
        font-size : 30px;
        line-height : 20px;
    }
    button{
        background:transparent;
        border:1px solid white;
        color:white;
        padding : 10px;
    }
   
`
const AboutWebsiteContentWrapper=Styled.div`
    position:relative;
    top:-300px;
    left:230px;
    text-align:center;
    color:#212121;
    font-size:18px;
    width:900px;
    


`

function Home(){
    return(
        <div>
            <HomeWrapper>
                <div><img src="http://www.expense-manager.in/assets/img/Expmng-Logo.png" alt="logo" height="50px" width="160px" /></div>
              
                <div>
                    <ul>
                        <li>HOME <span>o</span></li>
                        <li>FEATURES <span>o</span></li>
                        <li>ABOUT US <span>o</span></li>
                        <li>CONTACT</li>
                    </ul>
                </div>
                <Link to="/login"><button>LOGIN</button></Link>
                <Link to="/register"><button>REGISTER</button></Link>
              
            </HomeWrapper>
            <BackgroundWrapper>
                <img src="http://www.expense-manager.in/assets/img/bg/img1.jpg" alt="landing page" height="800px" width="100%"/>   
            </BackgroundWrapper>
            <MiddleWrapper>
                <hr width="500px" />
                <div>		&#65121;{"            "}We track your Daily Expenses{"             "}	&#65121;</div>
                <hr width="500px" />
                <p>Manage  Your Expense Directly on Website.</p>
                <p>Easily Keep Track of Finances</p>
                <hr width="100px"/>
                <button>Learn More</button>
            </MiddleWrapper>
            <AboutWebsiteContentWrapper>
                <h1>ABOUT WEBSITE</h1>
                <hr width="100px"/>
                <div>
                How to track your expenses successfully? We know that it’s easy. You only need to add each expense you do… no more than that!
                And Expense Manager is going to help you.This website allows you to record your expenses easily. Optionally you can assign a category to your expense in order to get detailed statistics and helpful insights.
                Expense Manager is simple, intuitive, stable and feature-rich website that is just designed for you.
                Just add new transactions when you are buying a coffee or taking a taxi or whenever do a transactions. It’s done in one click, because you just need to fill few field with expense/income amount. It is so quick and enjoyable!
                </div>
            </AboutWebsiteContentWrapper>
        </div>
    )
}

export default Home