document.addEventListener("DOMContentLoaded", function() {
    
    let articles = document.querySelector(".layout__articles");

    let posts = [
        {
            title:"Articulo 1",
            date: "01/01/2025",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque sequi molestiae, deserunt quidem vel rem quia voluptate tenetur explicabo? Accusamus nemo laudantium eius deserunt aliquam unde repellat blanditiis omnis officiis."
        },

        {
            title:"Articulo 2",
            date: "01/02/2025",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque sequi molestiae, deserunt quidem vel rem quia voluptate tenetur explicabo? Accusamus nemo laudantium eius deserunt aliquam unde repellat blanditiis omnis officiis."
        },

            {
            title:"Articulo 3",
            date: "01/03/2025",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque sequi molestiae, deserunt quidem vel rem quia voluptate tenetur explicabo? Accusamus nemo laudantium eius deserunt aliquam unde repellat blanditiis omnis officiis."
        },

        {
            title:"Articulo 4",
            date: "01/04/2025",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque sequi molestiae, deserunt quidem vel rem quia voluptate tenetur explicabo? Accusamus nemo laudantium eius deserunt aliquam unde repellat blanditiis omnis officiis."
        },

            {
            title:"Articulo 5",
            date: "01/05/2025",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque sequi molestiae, deserunt quidem vel rem quia voluptate tenetur explicabo? Accusamus nemo laudantium eius deserunt aliquam unde repellat blanditiis omnis officiis."
        }
    ];

    if (articles) {
        posts.forEach(article => {

            articles.innerHTML += `
                <article class="article__article">

                    <h3 class="article__title">${article.title}</h3>

                    <span class="article__date">${article.date}</span>

                    <p class="article__body">
                        ${article.body}
                    </p>

                    <a href="#" class="article__btn">Leer Mas ... </a>

                </article>
            `
        });
    }
});