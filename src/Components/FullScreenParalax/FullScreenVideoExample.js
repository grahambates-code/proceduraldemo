import React from 'react';
import FullScreenParallax from './index';

function FullScreenVideoExample() {

    const _renderItem = (itemData) => {
        if (itemData.type === 'withButton') {
            return (
                <div>
                    <p style={{ fontSize: '24px', lineHeight: 1.5 }}>
                        {itemData.text}
                    </p>
                    <button 
                        style={{ 
                            borderRadius: '32', 
                            padding: '12px 24px',
                            backgroundColor: 'transparent',
                            color: '#fff',
                            fontSize: '16px',
                            fontWeight: 700,
                            border: '1px solid #fff',
                            outline: 'none'
                        }}
                    >
                        Watch HD Video
                    </button>
                </div>
            );
        }

        return (
            <h1 style={{ fontSize: '48px', fontWeight: 700 }}>
                {itemData.text}
            </h1>
        );
    } 

    return (
        <FullScreenParallax
            mediaComponent={(
                <video 
                    autoPlay={true} 
                    muted={true} 
                    loop={true}
                    poster="https://dji-official-fe.djicdn.com/dps/6611d2a9a27876250c022788cf1e1936.jpg"
                    width="100%"
                    height="100%"
                    style={{ objectFit: 'cover' }}
                >
                    <source
                        type="video/mp4"
                        src="https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/3ea1f7e7-aa85-4e96-932d-c1c61a82bd36.mp4"
                    />
                </video>
            )}
            data={[
                { text: 'Get results that match the intensity of your flights.', type: 'text' },
                { text: 'Powerful propulsion capabilities combined with a 150° super-wide FOV provide an unrivaled view. 4x Slow Motion, RockSteady stabilization, and distortion correction give pilots even smoother, more dramatic results.', type: 'withButton' },
            ]}
            renderItem={_renderItem}
            onEnterItem={(data) => {
                console.log('onEnterItem', data)
            }}
        />
    )
}

export default FullScreenVideoExample;
