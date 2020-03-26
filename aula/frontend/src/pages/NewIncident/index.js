import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function NewIncident(){
    const history = useHistory();
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [value, setValue] = useState([]);
    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        }

        try {
            await api.post('incidents', data,{
                headers:{
                    Authorization: ongId
                }
            });
            alert('Cadastrado Com Sucesso');
            history.push('/profile');
        } catch (error) {
            alert("Erro ao cadastrar. Tente Novamente.");
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo"/>
                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link to="/profile" className="back-link" ><FiArrowLeft size={16} color="#E02041" />Voltar</Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input placeholder="Título do caso" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}/>

                    <textarea placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}/>

                    <input placeholder="Valor em reais R$" 
                    value={value}
                    onChange={e => setValue(e.target.value)}/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}