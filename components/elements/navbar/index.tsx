import Link from 'next/link';
import styles from './navbar.module.scss';
import Image from 'next/image';
import icon from '../../../public/next.svg';

interface Props {
	className?: JSX.ElementClass;
	Items: List[];
}
export interface List {
	text: string;
	link: string;
}

export function Navbar({ className, Items }: Props) {
	const list: JSX.Element[] = Items.map(({ text, link }: List, index) => {
		return (
			<li key={index}>
				<Link
					href={link}
					className={styles.link}
				>
					{text}
				</Link>
			</li>
		);
	});

	return (
		<div className={styles.navbar}>
			<Image
				alt='icon'
				src={icon}
				className={styles.icon}
			></Image>
			<ul>{list}</ul>
		</div>
	);
}
