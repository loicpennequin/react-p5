import React, { useCallback } from 'react';
import { Block } from '../P5';
import Layer from '../Layer';

export default function Circle({
    render,
    target,
    children
}) {
    const onRender = useCallback(
        p => {
            if (target.current) {
                target.current.onBeforeApply((layer, img) => {
                    const maskImage = p.createImage(p.width, p.height);
                    maskImage.copy(p, 0, 0, p.width, p.height, 0, 0, p.width, p.height)
                    img.mask(maskImage);
                });
            }
        },
        [target]
    );

    return (
        <Layer autoApply={false}>
            {maskLayer => (
                <>
                    {children(maskLayer)}
                    <Block pInstance={maskLayer} onRender={onRender} />
                </>
            )}
        </Layer>
    )
}
