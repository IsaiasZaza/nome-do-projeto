const Container = () => {
    return (
        <>
            <div id="section1" className="h-screen bg-red-300 flex items-center justify-center p-4">
                <h2 className="text-2xl md:text-3xl font-bold">Quem somos nós</h2>
            </div>
            <div id="section2" className="h-screen bg-green-300 flex items-center justify-center p-4">
                <h2 className="text-2xl md:text-3xl font-bold">Produtos</h2>
            </div>
            <div id="section3" className="h-screen bg-blue-300 flex items-center justify-center p-4">
                <h2 className="text-2xl md:text-3xl font-bold">Motivos para ser afiliado</h2>
            </div>
            <div id="section4" className="h-screen bg-yellow-300 flex items-center justify-center p-4">
                <h2 className="text-2xl md:text-3xl font-bold">Contato</h2>
            </div>

        </>
    )
}

export default Container;