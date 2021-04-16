import styled from 'styled-components';
import { Close } from '@material-ui/icons';

const CloseSelectedFile = styled(Close)`
	width: 30px;
	height: 30px;
	color: #666;
	cursor: pointer;
	&:hover {
		color: #ee001e;
	}
`;

export default CloseSelectedFile;
