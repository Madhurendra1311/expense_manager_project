import React from 'react'
import Styled from 'styled-components'

const FooterWrapper = Styled.footer`
    text-align : center;
`

function Footer(){
    return(
        <div>
            <FooterWrapper>
                <span>2017© All Rights Reserved.</span>
            </FooterWrapper>
        </div>
    )
}

export default Footer
