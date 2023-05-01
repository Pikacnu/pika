import { Navbar, List } from '../components/elements/navbar';
import styles from '../styles/test.module.scss';
import Image from 'next/image';
import img1 from '../public/assets/img1.jpg';

export default function Test() {
	const Bar: List[] = [
		{
			text: 'History',
			link: '/era',
		},
		{
			text: 'Nothing',
			link: '/',
		},
	];

	return (
		<>
			<Navbar Items={Bar} />
			<div className={styles.body}>
				<Image
					src={img1}
					alt='img'
					className={styles.img}
				></Image>
			</div>
			<div className={styles.cards}>
				<div className={styles.card}>
					<p>A</p>
				</div>
				<div className={styles.card}>
					<p>B</p>
				</div>
				<div className={styles.card}>
					<p>C</p>
				</div>
				<div className={styles.card}>
					<p>D</p>
				</div>
				<div className={styles.card}>
					<p>E</p>
				</div>
				<div className={styles.card}>
					<p>F</p>
				</div>
			</div>

			<div className={styles.faq}>
				<ul>
					<li>
						<div className={styles.question}>
							<h2>Why You do this?</h2>
							<p>For review history of my test and share to my friend</p>
						</div>
					</li>
				</ul>
			</div>

			<div className={styles.bottom}></div>
			<div className={styles.bottomfill}></div>
		</>
	);
}
