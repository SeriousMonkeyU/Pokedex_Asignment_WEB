import React, { useState } from "react";
import Modal from "react-modal";
import "../css/Poke-style.css";

const Pokemon = ({ pokemon, loading }) => {
    const [showModal, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [pokeId, setPokeId] = useState("");
    const [pokeName, setPokeName] = useState("");
    const [pokeHeight, setPokeHeight] = useState("");
    const [pokeWeight, setPokeWeight] = useState("");
    const [pokeAbilities, setPokeAbilities] = useState([]);
    const [pokeTypes, setPokeTypes] = useState([]);
    const [pokeStats, setPokeStats] = useState([]);
    const [pokeImg, setPokeImg] = useState();

    const openPokeInfo = async (res) => {
        setPokeId(res.id)
        setPokeName(res.name);
        setPokeHeight(res.height);
        setPokeWeight(res.weight);
        setPokeAbilities(res.abilities);
        setPokeTypes(res.types);
        setPokeStats(res.stats);
        setPokeImg(res.sprites.front_default);
        handleShow();
    };

    return (
        <>
            <Modal
                isOpen={showModal}
                onRequestClose={handleClose}
                contentLabel="Poke Info"
                ariaHideApp={false}
                style={{
                    overlay: { backgroundColor: 'rgba(158, 42, 43, 0.4)' },
                    content: {
                        position: 'absolute',
                        top: '20%',
                        left: '20%',
                        right: '20%',
                        bottom: '40px',
                        background: 'rgba(158, 42, 43, 0)',
                        border: '0px'
                    }
                }}
            >
                <div class="poke-content">
                    <button class="btn-func btn" onClick={handleClose}>
                        X
                    </button>

                    <h2 class="poke-name">{pokeId} : {pokeName}</h2>
                    <img
                        src={pokeImg}
                        alt="Image"
                        class="poke-image"
                    ></img>
                    <div class="attribute-list">
                        <p><span class="attribute-name">Types:</span> {pokeTypes.map(type => type.type.name).join(", ")}</p>
                        <p><span class="attribute-name">Height:</span> {pokeHeight}</p>
                        <p><span class="attribute-name">Weight:</span> {pokeWeight}</p>
                        <p><span class="attribute-name">Abilities:</span> {pokeAbilities.map(ability => ability.ability.name).join(", ")}</p>
                        <p class="stat-style">Stats</p>
                        <p>
                            {pokeStats.length > 0 ? (
                                <table class="stat-view">
                                    <tr>
                                        <th>HP</th>
                                        <td>{pokeStats[0].base_stat}</td>
                                    </tr>
                                    <tr>
                                        <th>ATTACK</th>
                                        <td>{pokeStats[1].base_stat}</td>
                                    </tr>
                                    <tr>
                                        <th>DEFENCE</th>
                                        <td>{pokeStats[2].base_stat}</td>
                                    </tr>
                                    <tr>
                                        <th>SPECIAL-ATTACK</th>
                                        <td>{pokeStats[3].base_stat}</td>
                                    </tr>
                                    <tr>
                                        <th>SPECIAL-DEFENCE</th>
                                        <td>{pokeStats[4].base_stat}</td>
                                    </tr>
                                    <tr>
                                        <th>SPEED</th>
                                        <td>{pokeStats[5].base_stat}</td>
                                    </tr>
                                </table>
                            ) : (
                                <p>No stats available.</p>
                            )}
                        </p>
                    </div>
                </div>
            </Modal>

            <div class="row align">
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    pokemon
                        .filter((item) => {
                            return item;
                        })
                        .map((item) => {
                            return (
                                <div class="col" key={item.id}>
                                    <div class="poke-card" onClick={() => openPokeInfo(item)}>
                                        <img
                                            src={item.sprites.front_default}
                                            alt="Poke-card image"
                                        />
                                        <div>
                                            <h5 class="poke-name">{item.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                )}
            </div>

        </>
    );
};

export default Pokemon;
