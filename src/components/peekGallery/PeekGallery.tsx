import { Variants } from 'framer-motion';
import React, { useState } from 'react';
import {ThemeProvider} from 'styled-components';

import theme from '../../theme';
import * as S from './PeekGallery.styles';

function PeekGallery() {
    const [isOpen, setIsOpen] = useState(false);
    // const cards = ['#7579e7', '#cee397', '#1f6f8b'];
    const cards = ['white', 'white', 'white'];

    return (
        <ThemeProvider theme={theme}>
            <S.Bg>
                <S.MobileView>
                    <S.InnerMobileView>
                        <S.CardCont>
                            {cards.map((num, i) => (
                                <S.Card
                                    key={i}
                                    animate={isOpen ? 'open' : 'close'}
                                    variants={cardVariant}
                                    style={{
                                        perspective: '500px',
                                        zIndex: cards.length - i
                                    }}
                                    onClick={e => setIsOpen(!isOpen)}
                                    custom={i}
                                    bgColor={num}
                                >
                                </S.Card>
                            ))}
                        </S.CardCont>
                    </S.InnerMobileView>
                </S.MobileView>
            </S.Bg>
        </ThemeProvider>
    )
}

const cardVariant: Variants = {
    open: (index) => ({
        rotateX: -25,
        y: -(index * 50),
        boxShadow: '0 -5px 30px rgba(0, 0, 0, 0.08)'
    }),
    close: (index) => ({
        rotateX: 0,
        y: 0,
        boxShadow: 'none'
    })
}

export default PeekGallery;