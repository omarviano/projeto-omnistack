import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import logoImage from '../../assets/logo.svg'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsApp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUF] = useState('')

    const history = useHistory()

    const handleRegister = async (e) => {
        e.preventDefault()

        const data = { name, email, whatsapp, city, uf }

        const response = await api.post('ongs', data)

        try {
            alert(`Seu ID de acesso: ${response.data.id}`)

            history.push('/')
        } catch (error) {
            alert('Deu ruim, tente novamente')
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude a encontrarem os casos da sua ONG.</p>

                    <Link to='/' className='back-link'><FiArrowLeft size='16' color='#e02041' />Não tenho cadastro</Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder='Nome da ONG' value={name} onChange={e => setName(e.target.value)} />
                    <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                    <input placeholder='WhatsApp' value={whatsapp} onChange={e => setWhatsApp(e.target.value)} />

                    <div className="input-group">
                        <input placeholder='Cidade' value={city} onChange={e => setCity(e.target.value)} />
                        <input placeholder='UF' value={uf} style={{ width: 80 }} onChange={e => setUF(e.target.value)} />
                    </div>

                    <button type="submit" className='button'>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default Register