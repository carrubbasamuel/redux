import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function Cart() {
    const[isCartOpen, setIsCartOpen] = useState(false);
    const { rubrica } = useSelector((state) => state.rubrica);


    if(isCartOpen){
        return (
            <div className='rubrica'>
                <h1>Rubrica</h1>
                <Button variant='danger' className='m-2 text-end' onClick={() => setIsCartOpen(false)}>Chiudi</Button>
                {rubrica && rubrica.map((user) => (
                    
                    <div className='p-3' key={user.id}>
                        <img width={50} src={user.image} alt={user.firstName} />
                        <h1>{user.firstName}</h1>
                        <h1>{user.lastName}</h1>
                        <h4>{user.email}</h4>
                        <p>ip: {user.ip}</p>

                    </div>
                ))}
                
            </div>
        )
    }

    return (
        <Button onClick={() => setIsCartOpen(true)} variant="success">Rubrica</Button>
    )
}