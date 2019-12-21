import React, { useCallback } from 'react';
import { Block, useP5 } from '../P5';
import Layer from '../Layer';
import logDebug from '../../utils/debugLogger';

export default function Mask({ render, target, id, debug = false, children }) {
    const p5 = useP5();
    const onRender = useCallback(
        p => {
            target.onBeforeApply((layer, img) => {
                if (p.width <= 0 || p.height <= 0) return;

                if (p5.debug) logDebug('applying mask on layer', target.__id);

                const maskImage = p.createImage(p.width, p.height);
                const copyProps = [0, 0, p.width, p.height];

                maskImage.copy(p, ...copyProps, ...copyProps);
                img.mask(maskImage);
            });
        },
        [p5.debug, target]
    );

    return (
        <Layer autoApply={false} id={id}>
            {maskLayer => (
                <>
                    {children(maskLayer)}
                    <Block pInstance={maskLayer} onRender={onRender} />
                </>
            )}
        </Layer>
    );
}
