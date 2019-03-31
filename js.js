

function upDate(previewPic){
    /* 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       */
      var srcc = previewPic.src;
      console.log(srcc)
      var imgg = document.getElementById('image');
      imgg.style.backgroundImage= 'url(' + srcc + ')';
      

       
       /*2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
      var srcc2 = previewPic.alt;
      imgg.innerHTML=srcc2;
}
     
   
       function unDo(){
        /* 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       */
      var imgg = document.getElementById('image');
     imgg.style.backgroundImage = "url(' ')"
       
      /* 2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
      imgg.innerHTML="Hover over an image below to display here.";     

       }