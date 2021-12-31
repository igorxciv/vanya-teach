import { getCurrentYear } from 'lib/date';
import { FC } from 'react';
import { DescriptionStyled, FooterStyled } from './Footer.style';

export const Footer: FC = () => {
	return (
		<FooterStyled>
			<DescriptionStyled>
				ИП ЗАХАРЕНКО ИВАН ВЛАДИМИРОВИЧ
				<br />
				УНП: 692172893
				<br />
				Свидетельство о государственной регистрации № 692172893 от 19.11.2020 выдано Минским горисполкомом
			</DescriptionStyled>
			<div>© 2020 - {getCurrentYear()} ИП Захаренко Иван Владимирович</div>
		</FooterStyled>
	);
};
