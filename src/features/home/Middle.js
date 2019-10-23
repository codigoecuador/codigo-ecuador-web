import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Image } from 'semantic-ui-react';

const Middle = () => (
    <Parallax className="Top" y={[-20, 20]} tagOuter="figure">
        <Image src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
    </Parallax>
)

export default Middle;
