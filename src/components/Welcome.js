import React from 'react';
import tachyons from 'tachyons';

export default function Welcome() {
    return (
        <div className="tc mt0">
            <img alt='logo' src={process.env.PUBLIC_URL + '/img/logo.png'} />;
            <p className=""> We bring you the latest news ranging from sports,fashion, current news etc </p>
            <p>Login if you are an existing user </p>

    <p>If not a user, we are happy to have you here. Signup and enjoy news on the go</p>
        </div>
    )
}
