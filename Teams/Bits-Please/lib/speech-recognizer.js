
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
        var textArea = $('#speech-page-content');
        var textAreaID = 'speech-page-content';

        $('.dog-mic').click(function(){
            startRecognition();
        });

       /* $('.dog-mic').click(function(){
            recognition.stop();
        });*/

        var startRecognition = function() {
            textArea.focus();
            recognition.start();
        };

        

       recognition.onresult = function (event) {
    for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          if(event.results[i][0].transcript == "dog" || event.results[i][0].transcript == "dog " || event.results[i][0].transcript == " dog"){
                insertAtCaret(textAreaID, "CORRECT ");
           }else{
               insertAtCaret(textAreaID, "FALSE ");
           }
        }
    }
};

        recognition.onend = function() {
            /*$('.speech-content-mic').removeClass('speech-mic-works').addClass('speech-mic');*/
        };
    });
})(jQuery);