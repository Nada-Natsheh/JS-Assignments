let PrimitiveTypes = (type1) => {
  
    if (typeof type1 === "string" ){
      return type1;
    };
    
    if (typeof type1 === 'number'){
      return (type1)*3;
    };
    
    if (typeof type1 !== "string" && typeof type1 !== 'number'){
        
        return type1;
        
        }; 
  };
  
  console.log(PrimitiveTypes(type1=2));
  