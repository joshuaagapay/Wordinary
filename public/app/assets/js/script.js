$(document).ready(() => {
    $('#search').change(() => {
        const word = $('#search').val();
        if(word !== ""){
            $.ajax({url:'https://2-dot-diktoapi.appspot.com/api/v1/words/'+word,
                    method:'GET',
                    success: (result) => {
                        const audio = new Audio(result.audio);
                        let htmlString = "";
                        audio.play();

                        result.definition.forEach((element) => {
                            htmlString += `<span class="flow-text">${element.definition}</span></br></br>`;
                        });
                     
                        let responseText = `
                                            <div class="row">
                                                <div class="col s12"><span class="flow-text"><h3>${result.text}</h3></span></div>
                                                <div class="col s7 push-s3"><span class="flow-text">${result.translation}</span></div>
                                                <div class="col s3 pull-s7"><span class="flow-text">Translation:</span></div>
                                                <div class="col s9 push-s3">${htmlString}</div>
                                                <div class="col s3 pull-s9"><span class="flow-text">Definition:</span></div>
                                            </div>
                                            `;
                                            
                        $('.display-word').empty();
                        $('.display-word').append(responseText);
                        console.log(result);
                    }
            });
        }
    });
});