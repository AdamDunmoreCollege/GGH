export default function Gallery(){
    return `
    <section id="galley_section">
        <div id=gallery_carousel>
            <button class="gallery_button" id="gallery_left"><</button>
            <button class="gallery_button" id="gallery_right">></button>

            <div class="skeleton_div" id="gallery_div"></div>
        </div>

        <div id="gallery_video_div"><iframe id="gallery_video" width="420" height="315" src="https://www.youtube.com/embed/qjY1nKXSGzY" /></div>
    </section>
        `;
}

let active = 1;
const IMG_AMOUNT = 8;

export function gallery_change_image(state){
    if(state === "left"){active++;}
    else if(state === "right"){active--;}

    if(active > IMG_AMOUNT){active = 1;}
    else if(active < 1){active = IMG_AMOUNT}

    document.getElementById("gallery_div").innerHTML = `<img id="gallery_img" src="./assets/img/gallery_${active}.jpg"/>`
}

export function gallery_addListeners(){
   document.getElementById("gallery_left").addEventListener("click", () => {gallery_change_image("left")}) 
   document.getElementById("gallery_right").addEventListener("click", () => {gallery_change_image("right")}) 
}
