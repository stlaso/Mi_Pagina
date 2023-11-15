

function Inicio() {
    return (
        <>
            <section className="img-inicio bg-center bg-no-repeat h-screen flex bg-gray-700 bg-blend-multiply">
                <div className="linea-izquierda left w-1/3"></div>

                <div className="px-4 mx-auto max-w-screen-xl w-1/3 text-center py-24 lg:py-56">
                    <h3 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Hola soy </h3>
                    <h2 className="mb-8 text-lg font-normal text-purple-600 lg:text-xl sm:px-16 lg:px-48">Martin Barrios</h2>
                    <h2 className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"> Programador full stack</h2>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"></div>
                </div>

                <div className="linea-derecha right w-1/3"></div>
            </section>
        </>
    )
}

export default Inicio