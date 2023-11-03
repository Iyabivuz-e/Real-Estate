import './Right.scss'

const Right = () => {
  return (
    <div className='right-side'>
      <h2>Send us a Message</h2>
      <form action="" method='' className='contact-form'>
        <input type="text" name="fname" placeholder='Enter your full name' id="" />
        <input type="email" name="email"  placeholder='Enter your email'id="" />
        <input type="number" name="pnumber" placeholder='Enter your phone number' id="" />
        <textarea className="text-area-box" placeholder="Message"></textarea>
        <button className="send-btn">Send</button>
      </form>
    </div>
  )
}

export default Right
