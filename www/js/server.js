
async function initServer() {
  
  try {
    const options = {
      method: 'GET',
      // mode: 'no-cors',
    };
    const isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
    let res;
    if (isAndroid){
    res = await fetch('http://d4e9-77-137-194-196.ngrok.io', options)
    }
    else {
      res = await fetch('http://localhost:5000', options)
    }
    // console.log(res)
    let data = await res.json()
    console.log(data)
    // const input = document.getElementById('inputImg');
    // input.addEventListener('onchange', (e) => openFile(e))
  }
  catch (e) {
    console.error(e.message, e.stack)
  }
  finally {
    console.log(navigator.camera)
  }
  
}
document.addEventListener('deviceready', initServer());
    // initServer();