const AppointmentsForm = () => {
    return(
        <section className="col-md-4">
            <h3 className="text-center" id="formTitle">😸 Generar Cita 😸</h3>
            <form className="text-dark rounded p-4" id="formPokemon">
                <div className="form-floating mb-3" style={{display: "none"}}>
                    <input type="number" className="form-control" name="id" placeholder="Id" id="formId" readOnly />
                    <label htmlFor="id" className="text-dark">Id</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="nombre" placeholder="Nombre" required />
                    <label htmlFor="mascota" className="text-dark">Nombre de la Mascota</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="tipo" placeholder="Tipo" required />
                    <label htmlFor="propietario" className="text-dark">Nombre del Propietario</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="date" className="form-control" name="hp" placeholder="Hp" required />
                    <label htmlFor="fecha" className="text-dark">Fecha</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="time" className="form-control" name="ataque" placeholder="Ataque" required />
                    <label htmlFor="hora" className="text-dark">Hora</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="especial" placeholder="Especial" required />
                    <label htmlFor="sintomas" className="text-dark">Síntomas</label>
                </div>

                    <button type="submit" className="btn btn-primary w-100" id="formButton">🙀 Registrar Cita 🙀</button>
                </form>
                <div className="badge w-100" id="contenedorAlerta"></div>
            </section>
    );
};
export default AppointmentsForm;