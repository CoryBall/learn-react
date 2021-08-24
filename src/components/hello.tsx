import React, {useEffect} from 'react';
import styled from 'styled-components';

export type HelloProps = {
    text: string;
}

const Hello: React.FC<HelloProps> = (props: HelloProps) => {
    const { text } = props;
    return (
        <div className="flex m-auto text-2xl text-white animate-bounce rounded-md h-40 w-40 bg-blue-500 justify-center items-center text-center">
            {text}
        </div>
    )
}

class HelloClass extends React.Component<HelloProps, {}> {
    render() {
        return (
            <Box className="animate-bounce">
                {this.props.text}
            </Box>
        )
    }
}
const Box = styled.div`
    display: flex;
    margin: auto;
    font-size: 1.5rem;
    line-height: 2rem;
    color: rgba(255, 255, 255, 1);
    border-radius: 0.375rem;
    height: 10rem;
    width: 10rem;
    background-color: rgba(59, 130, 246, 1);
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export default Hello;
export { HelloClass };
