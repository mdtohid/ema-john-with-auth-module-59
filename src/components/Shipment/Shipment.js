import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const [user] = useAuthState(auth);

    const handleNameBlur =(event)=>{
        setName(event.target.value);
        console.log(name)
    };

    const handleAddressBlur =(event)=>{
        setAddress(event.target.value);
    };

    const handlePhoneBlur =(event)=>{
        setPhone(event.target.value)
    }  

    const handleCreateUser =(event)=>{
        event.preventDefault();
        setEmail(user?.email);
        const shipping = {name, email, address, phone}
        console.log(shipping);
    }  


    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Shipping Information</h1>
                <form onClick={handleCreateUser}>
                <div className='input-group'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' onBlur={handleNameBlur} required/>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' value={user?.email} readOnly required/>
                    </div>
                    
                    <div className='input-group'>
                        <label htmlFor="address">Address</label>
                        <input type="text" name='address' onBlur={handleAddressBlur} required/>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="phone">Phone</label>
                        <input type="number" name='phone' onBlur={handlePhoneBlur} required/>
                    </div>

                    <input type="submit" name='submit' className='form-submit'  value="Add shipping" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;