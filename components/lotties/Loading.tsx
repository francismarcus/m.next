import Lottie from 'react-lottie';
import animationData from 'lotties/loading.json';
import styled from 'styled-components';

export default () => (
	<Flexbox>
		<Lottie options={defaultOptions} height={50} width={250} />
	</Flexbox>
);

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
};

const Flexbox = styled.div`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.bg};
	height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
