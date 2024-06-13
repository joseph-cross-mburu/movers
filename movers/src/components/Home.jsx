import React from 'react'

const Home = () => {
  return (
    <div id='home'>
        <h2>book service</h2>
      <form id='form'>
        <label >first name</label>
        <input type='text'></input>
        <br/>
        <label >second name</label>
        <input type='text'></input>
        <br/>
        <label for="email"> email</label>
        <input type='email' id='email'></input>
        <br/>
        <label >current location</label>
        <input type='text'></input>
        <br/>
        <label >destination </label>
        <input type='text'></input>
        <br/>
        <label for="ap">arpatment type</label>
        <select id='ap'>
        <option id='ap'>studio</option>
        <option id='ap'>one bedroom</option>
        <option id='ap'>two bedroom</option>
        <option id='ap'>three bedroom</option>
        <option id='ap'>four bedroom</option>
        </select>
        <br/>
        <label>payment type</label>
        <select id='pay'>
        <option id='pay'>mpesa</option>
        <option id='pay'>credit card</option>
        <option id='pay'>bank</option>
        </select>
        <br/>
    
      </form>
    </div>
  )
}

export default Home
