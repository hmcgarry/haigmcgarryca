import styles from '@/styles/hmform.module.css'
export default function ContactForm(){
    return(
    <div className={`${styles.HMForm}  d-flex `} fluid>
    <form action="https://formsubmit.co/e1ce23fb350fd46fa60e91af659afd3b" method='POST'>

        <input type="hidden" name="_subject" value="Website Email" /> 
        <input type="text" name="_honey" className={styles.HMFormHoney} />
        <input type="hidden" name="_captcha" value="false" />

        <div className={`row g-3`}>
            <div className='col-4'>
                <div className='row-auto'>
                <label for="firstname">First Name</label>
                </div>
                <div className='row-auto'>
                <input type="text" name="firstname" required id="firstname"/>
                </div>
            </div>
            <div className='col-4'>
                <div className='row'>
                    <label for="lastname">Last Name</label>
                </div>
                <div className='row-auto'>
                    <input type='text' name="lastname" required id="lastname"/>
                </div>
            </div>
        </div>

        <div className="row g-3">
            <div className='col'>
                <label for="email">Email</label>
                <input type='email' name="email" required id="email"/>
            </div>
        </div>
        <div className="row g-3">
                <label for="comment">Say something nice, say something mean. Please just say something</label>
        </div>
                
        <div className="row g-3">
            <textarea name='comment' className={styles.HMFormTextArea}/>
        </div>
        <button type="submit" className={styles.HMFormBtn}>Submit</button>
    </form>
    </div>
    )
}