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
        header.style.height = `${newHHeight}px`;

        if (menu) {
            const newMHeight = Math.max(
                minMenuHeight,
                maxMenuHeight - window.scrollY * 0.2
            );

            menu.style.height = `${newMHeight}px`;
        }
        
    });




    // beginning of animations for the TV
    const animations = {
        tvIdle: [
            // put pics in each: "pics/location/img"
            "TV/idle/idle-1.webp",
            // "TV/idle/idle-r.webp",
            // "TV/idle/idle-2.webp",
            // "TV/idle/idle-g.webp",

            "TV/idle/idle-3.webp",
            // "TV/idle/idle-b.webp",
            "TV/idle/idle-4.webp"
        ],
        web: [
            // "TV/idle/idle-1.png",
            // "TV/idle/idle-r.png",

            "TV/web/web-1.webp",
            "TV/web/web-2.webp",
            "TV/web/web-3.webp",
            "TV/web/web-4.webp",
            "TV/web/web-5.webp",
            "TV/web/web-6.webp",

            "TV/idle/idle-b.webp",
        ],
        motion3D: [
            // "TV/idle/idle-2.png",
            // "TV/idle/idle-g.png",

            "TV/animation/anim-1.webp",
            "TV/animation/anim-2.webp",
            "TV/animation/anim-3.webp",
            "TV/animation/anim-4.webp",

            "TV/animation/anim-5.webp",
            "TV/animation/anim-6.webp",
            "TV/animation/anim-7.webp",

            "TV/idle/idle-r.webp"
        ],
        physical: [
            "TV/physical/physical-1.webp",
            "TV/physical/physical-2.webp",
            "TV/physical/physical-3.webp",
            "TV/physical/physical-4.webp",

            "TV/physical/physical-5.webp",
            "TV/physical/physical-6.webp",
            "TV/physical/physical-7.webp",
            "TV/physical/physical-8.webp",

            "TV/idle/idle-g.webp"

            // "TV/idle/idle-3.png",
            // "TV/idle/idle-b.png"
        ],
        code: [
            "TV/github/github.webp"

            // "TV/idle-4.png",
            // "TV/idle-1.png"
        ],
        aiga: [
            "TV/aiga/aiga.webp",

            // "TV/idle/idle-1.png",
            // "TV/idle/idle-4.png",
        ]

    };

    // -- Preloading the pics for animation
    function preloadImages(imageArray) {
        imageArray.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }



    // Animation manager
    const img = document.getElementById("animation");

if (img) {
    // Preload every frame from every animation
    Object.values(animations).forEach(preloadImages);

    let currentAnimation = "tvIdle";
    let frame = 0;
    let animInterval;

    function playAnimation(name) {

        if (!animations[name]) {
            console.warn(`Animation "${name}" doesn't exist.`);
            return;
        }

        currentAnimation = name;
        frame = 0;

        clearInterval(animInterval);

        const frames = animations[name];
        // start by showing first frame immediately
        img.src = frames[0];

        // Reset screen effects
        img.style.filter = "none";
        img.style.opacity = "1";
        img.style.transform = "scale(1)";


        // If there's only one frame, just show it.
        if (frames.length === 1) {
            return;
        }

        // adjusting speed for only the idle
        const speed = name === "tvIdle" ? 350 : 800;
        

        animInterval = setInterval(() => {
            // frame = (frame + 1) % frames.length;
            // img.src = frames[frame];

            // Blur and fade out
            // img.style.filter = "blur(4px)";
            // img.style.opacity = "0.7";

            // Brief CRT flicker
            img.style.filter = "blur(1.5px) brightness(1.25)";
            img.style.opacity = "0.85";
            img.style.transform = "scale(1.002)";

            // Change frame
            frame = (frame + 1) % frames.length;
            img.src = frames[frame];

            // Quickly restore the screen
            requestAnimationFrame(() => {
                img.style.filter = "none";
                img.style.opacity = "1";
                img.style.transform = "scale(1)";
            });

            // setTimeout(() => {

            //     frame = (frame + 1) % frames.length;

            //     img.src = frames[frame];

            //     // Return to normal
            //     img.style.filter = "blur(0)";
            //     img.style.opacity = "1";

            // }, 80);

        }, speed); // milliseconds per frame
    }

    // Hover events
    document.querySelectorAll(".table-item").forEach(item => {

        item.addEventListener("mouseenter", () => {
            playAnimation(item.dataset.animation);
        });

        item.addEventListener("mouseleave", () => {
            playAnimation("tvIdle");
        });

    });

        playAnimation("tvIdle");
}

    


// });