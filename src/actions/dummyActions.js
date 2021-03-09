const LOADING = { type: "LOADING"};

export const dummyMount = () => {
  return async function() {
    try{
      setTimeout(function(){ alert("Page says Hello after 3 seconds"); }, 3000);
    }
    catch(error){
      return console.log('api errors: ', error)
    }
  }
  
}