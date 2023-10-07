function receivesAFunction(callback){
    callback()
  }
  
  function returnsANamedFunction(){
    return function investigator(){}
  }
  
  function returnsAnAnonymousFunction(){
    return function (){}
  }
  