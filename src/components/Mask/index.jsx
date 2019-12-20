import React, { useCallback } from 'react';
import { Block } from '../P5';
import Layer from '../Layer';

export default function Mask({ render, target, debug = false, children }) {
    const onRender = useCallback(
        p => {
            target.onBeforeApply((layer, img) => {
                console.log('applying mask on layer', target.__id);
                const maskImage = p.createImage(p.width, p.height);
                const copyProps = [0, 0, p.width, p.height];

                maskImage.copy(p, ...copyProps, ...copyProps);
                img.mask(maskImage);
            });
        },
        [target]
    );

    return (
        <Layer autoApply={debug}>
            {maskLayer => (
                <>
                    {children(maskLayer)}
                    {!debug && (
                        <Block pInstance={maskLayer} onRender={onRender} />
                    )}
                </>
            )}
        </Layer>
    );
}
