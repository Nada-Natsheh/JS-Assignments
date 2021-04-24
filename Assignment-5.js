function key(check){
  
    if (check===12345){
      return true;
    };
    
     if (check!==12345){
      return false;
    }; 
  };
  console.log(key(12345));
  
  function person(check) {
    
    if (check==='Mohammad'){
      return true;
    };
    
    if (check!=='Mohammad'){
      return false;
    }; 
    
  };
  
  console.log(person('Mohammad'));
  
  function security(keyvar,namevar){
   
    
    if(keyvar===12345 && namevar==='Mohammad'){
      return "Welcome";
    };
    if(keyvar!==12345 && namevar!=='Mohammad'){
      return "You can't access";
    };
    if (keyvar===12345 && namevar!=='Mohammad'){
      return "You can't access";
    };
    
    if (keyvar!==12345 && namevar==='Mohammad'){
      return "You can't access";
    };
    
  };
  const result = security(key=12345, person='Mohammad');
  alert (result);


  //**********************************************************

  function key(check=12345){
  
    if (true){
      return true;
    };
    
     if (false){
      return false;
    }; 
  };
  console.log(key(12345));
  
  function person(check) {
    
    if (check==='Mohammad'){
      return true;
    };
    
    if (check!=='Mohammad'){
      return false;
    }; 
    
  };
  
  console.log(person('Mohammad'));
  
  function security(keyvar,namevar){
   
    
    if(keyvar===true && namevar==='Mohammad'){
      return "Welcome";
    };
    if(keyvar!==true && namevar!=='Mohammad'){
      return "You can't access";
    };
    if (keyvar===true && namevar!=='Mohammad'){
      return "You can't access";
    };
    
    if (keyvar!==true && namevar==='Mohammad'){
      return "You can't access";
    };
    
  };
  const result = security(key=true, person='Mohammad');
  alert (result);
  
  
  