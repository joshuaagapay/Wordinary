$(document).ready(() => {
    'use strict';
    
    $('#search').change(() => {
        const word = $('#search').val();
        const url = `https://2-dot-diktoapi.appspot.com/api/v1/words/${word}`;
        
        if(word !== ""){
            fetch(url)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        display(data);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
        }
    
        const display = (data) => {
            let responseText='';
            $('.display-word').empty();

            if(data.definition === null){
                responseText = `<div class="col s12"><span class="flow-text">Not Found</span></div>`;
            }else{
                const audio = new Audio(data.audio);
                let htmlString = "";
                audio.play();

                data.definition.forEach((element) => {
                    htmlString += `<span class="flow-text"><h6><i>${element.partOfSpeech}</i></h6>${element.definition}.</span></br></br>`;
                });
                responseText = `
                                <div class="row">
                                    <div class="col s12"><span class="flow-text"><h3>${data.text}</h3></span></div>
                                    <div class="col s7 push-s3"><span class="flow-text">${data.translation}</span></div>
                                    <div class="col s3 pull-s7"><span class="flow-text">Translation:</span></div>
                                    <div class="col s9 push-s3">${htmlString}</div>
                                    <div class="col s3 pull-s9"><span class="flow-text">Definition:</span></div>
                                </div>
                                `;
            }
    
             $('.display-word').append(responseText);
    
        }
    });
});

