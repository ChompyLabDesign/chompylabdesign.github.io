// $(document).ready(function() { 



    const header = document.getElementById("top");
    const menu = document.querySelector(".menu");

    const maxHeightVW = 20; // vw
    const minHeightVW = 8;  // vw
    const maxMenuHeight = 70;
    const minMenuHeight = 45;

    window.addEventListener("scroll", () => {
        // console.log(window.scrollY);

        // const scrollVW = window.scrollY / window.innerWidth * 100;

        // const height = Math.max(
        //     minHeight,
        //     maxHeight - scrollVW
        // );

        // header.style.height = `${height}vw`;

        const maxHHeight = window.innerWidth * (maxHeightVW / 100);
        const minHHeight = window.innerWidth * (minHeightVW / 100);

        // const maxMHeight = window.innerWidth * maxMenuHeight;
        // const minMHeight = window.innerWidth * minMenuHeight;

        // Shrink 1 pixel for every 1 pixel scrolled
        const newHHeight = Math.max(
            minHHeight,
            maxHHeight - window.scrollY
        );

        const newMHeight = Math.max(
            minMenuHeight,
            maxMenuHeight - window.scrollY * 0.2
        );


        header.style.height = `${newHHeight}px`;
        menu.style.height = `${newMHeight}px`;
    });
// });