//useEffect => função de efeito colataral. é executada sempre que a pagina for carrega e tambem pode ester vinculada a mudanças de estados

import { useEffect, useState } from "react"

export function Exemplo1() {
    const [numero, setnumero] = useState(0)

    useEffect(() => {
        console.log(`O estado número mudou. O número agora é ${numero}`)
    }, [numero])

    return (
        <section>
            <h2>Exemplo 1</h2>

            <div>
                <h3>Número: {numero}</h3>
                <button onClick={() => setnumero(numero + 1)}>Aumentar</button>
            </div>
        </section>
    )
}