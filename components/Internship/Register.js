import Image from 'next/image';
import React, { Component } from 'react';
import Bg from '../../out/images/internship/bg.png';
import ContactFormArea from '../Contact/ContactFormArea';
import RegisterformArea from './RegisterFormArea';


class Register extends Component {
    render() {
        return (
            <div className='register-internship-block'>
                <div className='bg-img'>
                    <Image
                        src={Bg}
                        alt="image"
                    />
                </div>
                <RegisterformArea />
            </div>
        );
    }
}

export default Register;