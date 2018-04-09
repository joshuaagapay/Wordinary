(function () {
    'use strict';

    $(document).ready(() => {
        $('#search').change(() => {
            const word = $('#search').val();
            const url = `https://2-dot-diktoapi.appspot.com/api/v1/words/${word}`;
            if(word !== ""){

                // const getWords = setInterval(() => {
                //     fetch(url)
                //         .then((response) => {
                //             return response.json();
                //         })
                //         .then((data) => {
                //             displayToHtml(data);
                //             console.log(data);
                //         })
                //         .catch((err) => {
                //             console.log(err);
                //         });
                //         clearInterval(getWords);
                // }, 1000);
                fetch(url)
                        .then((response) => {
                            return response.json();
                        })
                        .then((data) => {
                            const delay = setInterval(() => {
                                displayToHtml(data);
                                clearInterval(delay);
                            },200);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
            }
    
                const displayToHtml = (data) => {
    
                    const audio = new Audio(data.audio);
                    let htmlString = "";
                    audio.play();
    
                    data.definition.forEach((element) => {
                        htmlString += `<span class="flow-text"><h6><i>${element.partOfSpeech}</i></h6>${element.definition}.</span></br></br>`;
                    });
                    let responseText = `
                                        <div class="row">
                                            <div class="col s12"><span class="flow-text"><h3>${data.text}</h3></span></div>
                                            <div class="col s7 push-s3"><span class="flow-text">${data.translation}</span></div>
                                            <div class="col s3 pull-s7"><span class="flow-text">Translation:</span></div>
                                            <div class="col s9 push-s3">${htmlString}</div>
                                            <div class="col s3 pull-s9"><span class="flow-text">Definition:</span></div>
                                        </div>
                                    `;
                                                    
                    $('.display-word').empty();
                    $('.display-word').append(responseText);
    
                }
        });
    });
    
}());
