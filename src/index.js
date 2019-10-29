console.log('%c HI', 'color: firebrick')

//Challenge 1

fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => { return response.json() }
    )
    .then(data => {
        console.log(data);
        // obj = JSON.parse(response);

        for (const iterator of data.message) {
            // console.log(iterator);
            let doggy = document.getElementById("dog-image-container");
            let images = document.createElement("img");
            images.setAttribute("src", iterator)
            doggy.appendChild(images)
        }



    });

// fetch("https://dog.ceo/api/breeds/image/random/4")
// .then(function (response) {

//     return response.json();

// })
// .then(function (data) {
//     console.log(data);
//     // obj = JSON.parse(response);
// })

fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => { return response.json() })
    .then(data => {
        // console.log(data);

        // console.log(Object.values(data));


        // for (const key in data) {
        //     if (data.hasOwnProperty(key)) {

        //         var element = data[key];

        //         for (const keys in element) {
        //             if (Array.isArray(element[keys])) {
        //                 let breeds = document.getElementById("dog-breeds");
        //                 listItems = document.createElement("li");
        //                 breeds.appendChild(listItems)
        //                 listItems.innerHTML = keys;
        //             }


        //         }
        //     }
        // }


        let option = document.querySelectorAll("option");
        for (let index = 0; index < option.length; index++) {
            character = option[index];
            console.log(character);
            console.log(option[index]);

            character.addEventListener("click", function (e) {
                console.log(e.target.value);
                let values = e.target.value;


                //Challenge 3
                let breeds = document.getElementById("dog-breeds");
                // breeds.removeChild(listItems);
                // console.log(keys);


                for (const key in data) {
                    if (data.hasOwnProperty(key)) {

                        var element = data[key];

                        for (const keys in element) {
                            if (keys.charAt(0) === values) {
                                console.log(typeof (keys));
                                let breeds = document.getElementById("dog-breeds");
                                // breeds.style.display = "block";


                                if (Array.isArray(element[keys])) {
                                    // breeds.removeChild(listItems);

                                    let listItems = document.createElement("li");
                                    breeds.appendChild(listItems);
                                    listItems.innerHTML = keys;
                                    listItems.style.display = "block";

                                    listItems.addEventListener("click", function () {
                                        listItems.style.color = "darkred";
                                    }
                                    )
                                }
                            }
                            // else if (keys.charAt(0) === values) {
                            //     listItems.style.display = "none";

                            // }






                        }
                    }
                }




            });

        }







    });