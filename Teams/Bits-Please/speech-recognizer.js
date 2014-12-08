(function($) {

    $(document).ready(function() {


        try {
            var recognition = new webkitSpeechRecognition();
        } catch(e) {
            var recognition = Object;
        }
        recognition.continuous = true;
        recognition.interimResults = true;

        var interimResult = '';
        
        $('.instructions').click(function(){
            sweetAlert("Instructions","1. Click on the image\n2. Say what the image is");
        });


        $('.dog-mic').click(function(){
            startRecognition();
        });

   

        var startRecognition = function() {
     
            recognition.start();
        };

        

       recognition.onresult = function (event) {
    for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
            
          if(event.results[i][0].transcript == "dog" || event.results[i][0].transcript == "dog " || event.results[i][0].transcript == " dog"){
               
                sweetAlert("Good job!", "That was correct", "success");
                }else{
               
              
                sweetAlert("Oops!", "That was wrong", "error");
                 var msg = new SpeechSynthesisUtterance('dog');
                
                 window.speechSynthesis.speak(msg);
              
               
           }
        }
    }
};

       
    });
})(jQuery);