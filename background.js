function navigate(url) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
  });
}

chrome.omnibox.onInputEntered.addListener(
  function(text) {    	
    var busqueda = text.split(' !')[0];   
    var parametro= text.split(' !')[1];      
    if (parametro==undefined) {	
	navigate("https://www.google.com.uy/search?q="+busqueda)        
    }		
    if (parametro.match("im")) {	
       navigate("https://www.google.com/search?tbm=isch&q="+busqueda+"&tbs=imgo:1");       
    }
    if (parametro.match("so")) {	
       navigate("http://stackoverflow.com/search?q="+busqueda);       
    }   
    if (parametro.match("tw")) {	
       navigate("https://twitter.com/search?q="+busqueda);       
    }
    if (parametro.match("fb")) {	
       navigate("https://www.facebook.com/search/results.php?q="+busqueda);       
    }   
    if (parametro.match("if")) {	
       navigate("https://www.iconfinder.com/search/?q="+busqueda);       
    }   
    if (parametro.match("ml")) {	
       navigate("http://www.mercadolibre.com.uy/jm/search?as_word="+busqueda);       
    }   
    if (parametro.match("gs")) {	
       navigate("http://grooveshark.com/#!/search/song?q="+busqueda);       
    }
    if (parametro.match("yt")) {	
       navigate("http://www.youtube.com/results?search_query="+busqueda);       
    }   
    if (parametro.match("pbay")) {	
       navigate("http://thepiratebay.org/search/"+busqueda);       
    }     
    if (parametro.match("job")) {  
       navigate("http://www.buscojobs.com.uy/trabajo/ofertas?que="+busqueda);       
    }     
    
    
  });

    
