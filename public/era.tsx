import styles from '../styles/era.module.scss';
import { format } from 'date-fns';
import { v4 as id } from 'uuid';
import { useMemo } from 'react';
import { useTheme } from './hooks';

export interface EraProps {
	className?: string;
	eradata?: Era[];
}

export interface Thing {
	date: Date;
	thing: string;
	other?: string[];
	minus ?: boolean;
}
export interface Era {
	eraname: string;
	describe?: string;
	thing: Thing[];
}

export const Timeline = ({ eradata }: EraProps) => {
	const [theme, toggleTheme] = useTheme();

	if (!eradata) {
		eradata = [
			{
				eraname: 'Error',
				describe: '',
				thing: [{ date: new Date(), thing: 'undefind' }],
			},
		];
	}

	const erabuild = useMemo(() => {
		return eradata?.map((obj: Era, index) => {
			//era set
			const { eraname, describe, thing } = obj;
			let modifydescribe: string = describe ? `(${describe})` : '';
			//set random color
			const r = 255 - (index === 0 ? 0 : Math.floor(Math.random() * 256));
			const g = 255 - (index === 0 ? 0 : Math.floor(Math.random() * 256));
			const b = 255 - (index === 0 ? 0 : Math.floor(Math.random() * 256));
			//style
			const color: React.CSSProperties = {
				borderBottom: `10px solid rgb(${r},${g}, ${b})`,
			};
			//things
			const things = thing.map((obj, index) => {
				const { other, date, thing , minus } = obj;
				return (
					<>
						<div
							className={styles.event}
							key={id()}
						>
							<div
								className={styles.thing}
								key={id()}
							>
								<div
									className={styles.year}
									key={id()}
								>
									{minus
										? `- ${format(date, 'yyyy')}`
										: format(date, 'yyyy')}
								</div>
								<div
									className={styles.thing}
									key={id()}
								>
									{thing}
								</div>
							</div>
							{other?.map((things) => {
								return (
									<div
										key={id()}
										className={styles.other}
									>{`${things.replace(/\(/g, ' ⁀').replace(/\)/g, '‿')}`}</div>
								);
							})}
						</div>
					</>
				);
			});

			return (
				<div
					className={styles.era}
					key={id()}
				>
					<div
						style={color}
						className={styles.timeline}
						key={id()}
					>
						{eraname} {modifydescribe}
					</div>
					<div
						className={styles.events}
						key={id()}
					>
						{things}
					</div>
				</div>
			);
		});
	}, [eradata]);

	const styletheme = theme ? styles.light : styles.dark;

	return (
		<div
			className={`${styles.root} ${styletheme}`}
			key={id()}
		>
			<button
				className={styles.btn}
				onClick={toggleTheme}
			>
				{!theme ? (
					<img
						src='./sun.svg'
						alt='Light Theme'
					></img>
				) : (
					<img
						src='./moon.svg'
						alt='Dark Theme'
					></img>
				)}
			</button>
			<div
				className={styles.timelines}
				key={id()}
			>
				{erabuild}
			</div>
		</div>
	);
};
