import styled from 'styled-components'

const ContainerNavigation = styled.div`
    display:flex;
    padding: 0 0 10px 0;
    gap:20px;
    a{
        text-decoration:none;
        height:100%
        background:red;
    }
`

export default function Navigation() {
    return (
        <>
            <ContainerNavigation>
                {/* <nav>
                    <ul>
                        <li><a href="/takeorder">Registrar</a></li>
                        <li><a href="/">Pedidos</a></li>
                    </ul>
                </nav> */}
                <a href="/takeorder">Registrar</a>
                <a href="/">Pedidos</a>
                
            </ContainerNavigation>
        </>
    )
}