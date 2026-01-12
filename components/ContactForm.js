import styles from '@/styles/hmform.module.css'
export default function ContactForm(){
    return(
    <div className={`${styles.HMForm} container`}>
    <form action="https://formsubmit.co/e1ce23fb350fd46fa60e91af659afd3b" method='POST'>

        <input type="hidden" name="_subject" value="Website Email" /> 
        <input type="text" name="_honey" className={styles.HMFormHoney} />
        <input type="hidden" name="_captcha" value="false" />

        <div className={`row g-3 pt-4`}>
            <div className='col-4 px-2' >
                <div className='row-auto'>
                <label for="firstname">First Name</label>
                </div>
                <div className='row-auto'>
                <input type="text" name="firstname" required id="firstname"/>
                </div>
            </div>
            <div className='col-4 px-2'>
                <div className='row-auto'>
                    <label for="lastname">Last Name</label>
                </div>
                <div className='row-auto'>
                    <input type='text' name="lastname" required id="lastname"/>
                </div>
            </div>
        </div>

        <div className="row g-3 pt-2">
            <div className='col-4'>
                <div className='row-auto'>
                    <label for="email">Email</label>
                </div>
                <div className='row-auto'>
                    <input type='email' name="email" required id="email"/>
                </div>
            </div>
        </div>
        <div className="row g-3 pt-3">
                <label for="comment">Say something nice, say something mean. For the love of God, just say something</label>
        </div>
                
        <div className="row g-3 pt-1">
            <div className='col-8' >
            <textarea name='comment' className={styles.HMFormTextArea}/>
            </div>
        </div>
        <button type="submit" className={`${styles.HMFormBtn} mt-2`}>Submit</button>
    </form>
    </div>
    )
}