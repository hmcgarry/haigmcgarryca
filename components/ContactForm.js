export default function ContactForm(){
    return(
    <form action="https://formsubmit.co/mcgarry.haig@gmail.com" method='POST'>
        <input type="text" name="firstname" required/>
        <input type='text' name="lastname" required/>
        <input type='email' name="email" required/>
        <textarea name='comment'></textarea>
        <button type="submit">Secondary</button>
    </form>
    )
}