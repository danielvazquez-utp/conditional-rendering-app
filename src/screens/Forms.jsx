import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Forms = () => {

    const [edocivil, setEdocivil] = useState("Soltero")

  return (
    <>
        <div>Formularios</div>

        <div className='row'>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-body'>
                        <h4 className='card-title'>Datos personales</h4>
                        <div className='form-group'>
                            <label className='form-label fw-bold' minlength={3} >Nombre</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className='form-group mt-2'>
                            <label className='form-label fw-bold' minlength={3}>Apellido Paterno</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className='form-group mt-2 fw-bold' minlength={3}>
                            <label className='form-label'>Apellido Materno</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className='form-group mt-2 fw-bold'>
                            <label className='form-label'>Fecha de nacimiento</label>
                            <input type='date' className='form-control' />
                        </div>
                        <div class="form-group mt-2">
                            <label class="form-check-label mb-3 fw-bold" for="flexCheckDefault">
                                Estado civil
                            </label>
                            <div class="form-check ">
                                <input 
                                    class="form-check-input" 
                                    type="radio" 
                                    name="radioCivil" 
                                    value="Soltero"
                                    checked={ edocivil === "Soltero" }
                                    onChange={ (e) => setEdocivil(e.target.value) }
                                />
                                    <label class="form-check-label text-start" for="flexCheckDefault">
                                        Soltero(a)
                                    </label>
                            </div>
                            <div class="form-check">
                                <input 
                                    class="form-check-input" 
                                    type="radio" 
                                    name="radioCivil" 
                                    value="Casado" 
                                    checked={ edocivil === "Casado" }
                                    onChange={ (e) => setEdocivil(e.target.value) }
                                />
                                    <label class="form-check-label" for="flexCheckChecked">
                                        Casado(a)
                                    </label>
                            </div>
                            <div class="form-check">
                                <input 
                                    class="form-check-input" 
                                    type="radio" 
                                    name="radioCivil" 
                                    value="Divorciado" 
                                    checked={ edocivil === "Divorciado" }
                                    onChange={ (e) => setEdocivil(e.target.value) }
                                />
                                    <label class="form-check-label" for="flexCheckChecked">
                                        Divorciado(a)
                                    </label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        { edocivil!=="Soltero" && (
            <div className='row mt-3'>
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-body'>
                            <h4 className='card-title'>Datos familiares</h4>
                            <div className='form-group mt-2 fw-bold'>
                                <label className='form-label'>No. de hijos</label>
                                <input type='number' className='form-control' min={0} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }


        <Navbar />
    </>
  )
}

export default Forms