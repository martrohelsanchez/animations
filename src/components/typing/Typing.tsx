import React from 'react';
import {Variants} from 'framer-motion/types';

import * as S from './Typing.styles';
import {AnimationProps} from '../../shared/types';

const arrDots = [1, 2, 3];

function Typing({isAnimationInView}: AnimationProps) {
    return (
        <S.Bg>
            <S.TypingCont>
                <S.TypingBody>
                    <S.DotsCont>
                        {arrDots.map(num => (
                            <S.Dot 
                                key={num}
                                custom={num}
                                variants={variant}
                                animate={'typing'}
                            >
                            </S.Dot>
                        ))}
                    </S.DotsCont>
                </S.TypingBody>
            </S.TypingCont>
        </S.Bg>
    )
}

const variant: Variants = {
    typing: (i: number) => ({
        y: ['0%', '-90%', '0%'],
        transition: {
            delay: i * 0.15,
            repeat: Infinity,
            repeatDelay: .5
        }
    })
}

export default Typing;