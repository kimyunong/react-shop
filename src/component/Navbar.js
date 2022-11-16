import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // url을 바꿔준다
 
const Navbar = ( {authenticate} ) => {

  const menuList = ['여성','Divided','남성','신생아/유아','아동','H&M HOME','스포츠','Sale','지속가능성','기타'];
  
  const navigate = useNavigate();

  console.log("로그",authenticate);

  const gotoLogin=()=>{

    if(authenticate==false){
      navigate('/login')
    }else{
      
    }
  
  }

  const gotoHome=()=>{
    navigate('/');
  }

  const search=(event)=>{

    if(event.key === "Enter"){
      //입력한 검색어를 읽어온다
      let keyword = event.target.value
      console.log(keyword);

      navigate(`/?q=${keyword}`);
    }
    
  }

  return (
    
    <div>
        
      <div>
        <div className='login-box' onClick={gotoLogin}><FontAwesomeIcon icon={faUser}/>
          { authenticate == false? "login" : "logout" }
        </div>
      </div>
      
      <div className='logo-bar' onClick={gotoHome}>
        <img width={100} src='https://www2.hm.com/hm-logo.png'/>
      </div>
      
      <div className='menu-bar'>

        <div></div>

          <ul className='menu-box'>
          {menuList.map(menu=><li>{menu}</li>)}
          </ul>
        
        <div className='search-box'>
          <FontAwesomeIcon icon={faSearch}/>&nbsp;
          <input type="text" className='search-bar' placeholder='제품검색' onKeyPress={(event)=>search(event)}/>
        </div>

      </div>

    </div>

  )
}

export default Navbar
