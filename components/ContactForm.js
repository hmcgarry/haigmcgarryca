export default function ContactForm(){
    return(
    <form action="https://formsubmit.co/e1ce23fb350fd46fa60e91af659afd3b" method='POST'>
        <input type="text" name="firstname" required/>
        <input type='text' name="lastname" required/>
        <input type='email' name="email" required/>
        <textarea name='comment'></textarea>
        <button type="submit">Secondary</button>
    </form>
    )
}