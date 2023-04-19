var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
        status=0;
    function changeImage() {

        if(status==0)
            {status=1;
            document.getElementById("imgClickAndChange").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRkhld-WuFWlW527UmqU-aQI3pecDhNfrQDQ0QFhIct9Oynjv2";
        }
           else if(status==1)

                    {status=2;
                                        document.getElementById("imgClickAndChange").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS71FgbGSO-Fq-xgPwYPg5y_rT1fRgEYHVC3aU54jEUpz3l9mfq";
                    }

                else if(status==2){
                    status=3;
                    document.getElementById("imgClickAndChange").src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBlbIPvu8IHKlJ9-8ekB5eTzo3RbPxT3Yq2DC-k1tZGrMK5Nj2";
            }
   else if(status==3){
           status=4;
                     document.getElementById("imgClickAndChange").src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEHNQQnj7rS8QEn_jzKWWT-gVXyPy5Bl1eyVTVZ48QrX-BKQRE";
            }
            else if(status==4){
                         document.getElementById("imgClickAndChange").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyAzZNTUeJpD0OlBRavQRSrNlZrVwdk6vTWp1T3P1kYYaa_Qiz";
                    status=0;
            }





    }

