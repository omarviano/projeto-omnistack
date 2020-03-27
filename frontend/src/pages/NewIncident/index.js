import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

import api from '../../services/api'

import logoImage from '../../assets/logo.svg'


const NewIncidente = () => {
    const ongId = localStorage.getItem('ongId')
    const history = useHistory()

    const [title, seTitle] = useState('')
    const [description, setDescripton] = useState('')
    const [value, setValue] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = { title, description, value }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })

            history.push('/profile')
        } catch (error) {
            alert('Erro ao cadastar caso')
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontar um herói para resolver isso.</p>

                    <Link to='/profile' className='back-link'><FiArrowLeft size='16' color='#e02041' />Voltar pra Home</Link>
                </section>

                <form onSubmit={handleSubmit}>
                    <input placeholder='Título do caso' value={title} onChange={e => seTitle(e.target.value)} />
                    <textarea placeholder='Descrição' value={description} onChange={e => setDescripton(e.target.value)}></textarea>
                    <input placeholder='Valor em R$' value={value} onChange={e => setValue(e.target.value)} />

                    <button type="submit" className='button'>Cadastrar</button>
                </form>
            </div>
        </div>)
}

export default NewIncidente