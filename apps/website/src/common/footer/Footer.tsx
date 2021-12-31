import { getCurrentYear } from 'lib/date';
import { FC } from 'react';
import { CopyrightStyled, DescriptionStyled, FooterStyled, InfoLinksListStyled, InfoButtonStyled } from './Footer.style';

export const Footer: FC = () => {
	return (
		<FooterStyled>
			<InfoLinksListStyled>
				<li>
					<InfoButtonStyled>Политика конфиденциальности</InfoButtonStyled>
				</li>
				<li>
					<InfoButtonStyled>Правила оплаты</InfoButtonStyled>
				</li>
			</InfoLinksListStyled>
			<DescriptionStyled>
				ИП ЗАХАРЕНКО ИВАН ВЛАДИМИРОВИЧ
				<br />
				УНП: 692172893
				<br />
				Свидетельство о государственной регистрации № 692172893 от 19.11.2020 выдано Минским горисполкомом
			</DescriptionStyled>
			<CopyrightStyled>© 2020 - {getCurrentYear()} ИП Захаренко Иван Владимирович</CopyrightStyled>
		</FooterStyled>
	);
};
