export default function Contact(){
    return `
    <section id="contact_section">
        <section id="contact_left">
            <div id="contact_form">
                <h1 class="contact_form_comp" id="contact_title" style="border: none;">Want to get in touch?</h1>
                <input class="contact_form_comp" id="contact_subject" placeholder="subject"/>
                <textarea class="contact_form_comp" id="contact_form_textarea"></textarea>
                <button class="contact_form_comp" id="contact_submit">Submit</button>
            </div>
        </section>

        <section id="contact_right">
            <div id="contact_info">
                <p>Send mail to:<br><br>14 Long Craig Rigg<br>Edinburgh<br>EH5 1QT<br><br>Contact us by phone at:<br>0131 529 3901</p>
            </div>
            <div id="contact_img_div">
                <img id="contact_img" src="/src/assets/img/gas_works_1_1.jpg"/>
                <h3>Granton Gasholders</h3>
            </div>
        </section>
    </section>
        `;
}

export function contact_addListeners(){
    document.getElementById("contact_submit").addEventListener("click", () => {
        window.open(`mailto:granton_gas_works@gmail.com?subject=${document.getElementById("contact_subject").value}&body=${document.getElementById("contact_form_textarea").value}`);
    })
}
