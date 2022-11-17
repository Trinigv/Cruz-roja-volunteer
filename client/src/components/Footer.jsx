import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLinkedin,
	faFacebook,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export const Footer = () => {
	return (
		<section className='sectionFooter'>
			<div className='footerText'>
				<div className='footerDirecciones'>
					<p>Hipólito Yrigoyen 2070</p>
					<p>Ciudad Autónoma de Bs. As.</p>
					<p>C1089 AAN</p>
				</div>
				<div className='footerContacto'>
					<p>Tel.: (5411) 6065-0450</p>
					<p>Fax.: (5411) 6065-0450</p>
					<p>info@cruzroja.org.ar</p>
				</div>
			</div>
			<div className='footerSocial'>
				<a
					href='https://www.facebook.com/CruzRojaArg/'
					className='facebookSocial'>
					<FontAwesomeIcon
						icon={faFacebook}
						size='2x'
						className='iconSocial'
					/>
				</a>

				<a
					href='https://www.instagram.com/cruzrojaarg/'
					className='instagramSocial'>
					<FontAwesomeIcon
						icon={faInstagram}
						size='2x'
						className='iconSocial'
					/>
				</a>

				<a
					href='https://twitter.com/CruzRojaArg'
					className='twitterSocial'>
					<FontAwesomeIcon
						icon={faTwitter}
						size='2x'
						className='iconSocial'
					/>
				</a>

				<a
					href='https://www.linkedin.com/company/cruzrojaarg/'
					className='linkedinSocial'>
					<FontAwesomeIcon
						icon={faLinkedin}
						size='2x'
						className='iconSocial'
					/>
				</a>
			</div>
		</section>
	);
};
