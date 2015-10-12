var simonSequence = [];
$("#showSimon").click(function(){
    $("#simon").toggle();
});

$("#simonReset").click(function(){
    $("#simonForm")[0].reset();
    simonSequence = [];
    $("#simonOutput").html("");
});

$("#simonCompute").click(function(){
    var ssDB = {
        red:{
            0:{true:"Blue",false:"Blue"},
            1:{true:"Yellow",false:"Red"},
            2:{true:"Green",false:"Yellow"}
        },
        blue:{
            0:{true:"Red",false:"Yellow"},
            1:{true:"Green",false:"Blue"},
            2:{true:"Red",false:"Green"}        
        },
        green:{
            0:{true:"Yellow",false:"Green"},
            1:{true:"Blue",false:"Yellow"},
            2:{true:"Yellow",false:"Blue"}              
        },
        yellow:{
            0:{true:"Green",false:"Red"},
            1:{true:"Red",false:"Green"},
            2:{true:"Blue",false:"Red"}             
        }
    };
    var inputColor = $('input[name=simonColor]:checked').val()
    console.log(inputColor);
    var serialVowel = $('#serialHasVowel').is(':checked');
    var numStrikes = parseInt($('#strikeCount option:selected').text());
    var resultColor = ssDB[inputColor][numStrikes][serialVowel];
    simonSequence.push(" "+resultColor);
    $("#simonOutput").html(simonSequence);
});
