import React from "react";
import styled from "styled-components";

function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} Šimon Borovský - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
    .footer-middle {
        background: var(--dark);
        padding-top: 1.5rem;
        color: var(--white);
    }

    .footer-bottom {
        padding-bottom: 0.5rem;
        text-align: center;
    }
`;