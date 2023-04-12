import { TypeAnimation } from 'react-type-animation';

export const AnimatedText = () => {
    return (
        <TypeAnimation
            sequence={[
                'Software Developer',
                3000,
                'Ethical Hacker',
                3000,
                () => {},
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ display: 'inline-block' }}
        />
    );
};