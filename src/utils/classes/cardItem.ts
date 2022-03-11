import classNames from 'classnames';
import styled, { css } from 'styled-components';
const CardStyles = styled.div`
	${(props: { grid: string }) =>
		props.grid
			? css`
					width: 34.8rem;
					height: 34.8rem;
					background-color: rgb(175, 190, 206);
					color: var(--color-white);
					display: flex;
					flex-direction: column;
					position: relative;
					overflow: hidden;

					img {
						object-fit: cover;
						object-position: top;
						position: absolute;
						height: 110%;
						filter: brightness(50%);
					}
					.cardItemContainer {
						display: flex;
						padding-top: 10.4rem;
						align-items: center;
						gap: 1.7rem;
						padding-bottom: 1rem;
						padding-right: 3.6rem;
						z-index: 4;
					}
					.cardItemTittle {
						font-size: 2.6rem;
						text-overflow: ellipsis;
						white-space: nowrap;
						overflow: hidden;
						width: 27rem;
						z-index: 5;
					}

					.cardItemDesc {
						font-size: 1.4rem;
						margin: 0.7rem 3.6rem 1rem;
						max-width: 22.7rem;
						height: 5.6rem;
						text-overflow: ellipsis;
						white-space: nowrap;
						overflow: hidden;
						z-index: 5;
					}

					.cardItemEntertain {
						text-align: end;
						margin-right: 3.6rem;
						position: absolute;
						bottom: 28%;
						right: 0;
					}
					.buttonBox {
						display: flex;
						padding: 1rem 3.6rem;
						align-items: center;
						justify-content: flex-end;
						gap: 1.2rem;
						position: absolute;
						bottom: 10%;
						right: 0;
					}
			  `
			: css`
					flex-basis: 100%;
					height: 15rem;
					background: linear-gradient(
						90deg,
						rgba(0, 0, 0, 0.01) 8%,
						rgba(136, 136, 136, 1) 20%,
						rgba(102, 102, 102, 1) 50%,
						rgba(51, 51, 51, 0.6) 100%
					);
					color: var(--color-white);
					display: flex;
					flex-direction: column;
					position: relative;
					overflow: hidden;

					img {
						object-fit: cover;
						object-position: top;
						position: absolute;
						width: 25%;
						filter: brightness(50%);
					}
					.cardItemContainer {
						display: flex;
						gap: 20rem;
						padding-bottom: 1rem;
						padding-right: 3.6rem;
						z-index: 4;
					}
					.cardItemTittle {
						font-size: 2.6rem;
						text-overflow: ellipsis;
						white-space: nowrap;
						overflow: hidden;
						width: 27rem;
						z-index: 5;
						padding-top: 2rem;
					}

					.cardItemDesc {
						font-size: 1.4rem;
						margin: 0.7rem 23rem 1rem;
						max-width: 54rem;
						height: 5.6rem;
						text-overflow: ellipsis;
						white-space: nowrap;
						overflow: hidden;
						z-index: 5;
					}

					.cardItemEntertain {
						margin-right: 1.4rem;
						position: absolute;
						top: 5%;
						right: 0;
					}
					.buttonBox {
						display: flex;
						padding: 1rem 1.4rem;
						align-items: center;
						justify-content: flex-end;
						gap: 1.2rem;
						position: absolute;
						bottom: 40%;
						right: 0;
					}
			  `}
`;

export { CardStyles };
