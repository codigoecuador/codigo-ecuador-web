import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Image } from 'semantic-ui-react';

const Top = () => (
    <Parallax className="Top" y={[-20, 20]} tagOuter="figure">
        <Image src="https://images.unsplash.com/photo-1480365501497-199581be0e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
    </Parallax>
)

export default Top;
