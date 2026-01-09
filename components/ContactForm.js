export default function ContactForm(){
    return(
    <form action="https://formsubmit.co/e1ce23fb350fd46fa60e91af659afd3b" method='POST'>

        <input type="hidden" name="_subject" value="Website Email" />
        <input type="text" name="_honey" className={styles.HMFormHoney} />
        <input type="hidden" name="_captcha" value="false" />

        <input type="text" name="firstname" required/>
        <input type='text' name="lastname" required/>
        <input type='email' name="email" required/>
        <textarea name='comment' placeholder="say something nice :)"></textarea>
        <button type="submit">Secondary</button>
    </form>
    )
}